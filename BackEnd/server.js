/*
server.js

This file serves as the back-end for the MicroCourses website, facilitating all 
client requests and retrieving data from the database as required. It uses the
settings contained in the config.env file to allow the user to change the
MONGODB_URI and PORT being used as needed.

The first half of the file details the setup required for server to complete it's
tasks, the second is made up of API endpoints which can be accessed by the client
*/

//import express and cors packages necassary for handling API requests and transferring data
import express from "express";
import cors from "cors";

//import database packages need to connect to and retrieve data from mongoDB database
import pkg from "mongoose";
const { connect, connection, Schema, model, Types } = pkg;

//import config file so predefined environment variables can be used
import { config } from "dotenv";

//initialise express and pass in cors package
const app = express();
app.use(cors());

//allow for images to be served from images folder - images in this application are served by
//passing a url pointing at this folder to the client
app.use("/images", express.static("images"));

//loads config into process.env to be accessed below
config();

//connect to MongoDB using values from config.env, handle errors if connection fails
connect(process.env.MONGODB_URI);
const port = process.env.PORT || 3000;
const db = connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//define Mongoose schemas and models, module schema is defined first so that it can be used
//as a related document int he Course schema
const ModuleSchema = new Schema({
  name: String,
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  longDescription: String,
  duration: Number,
  imageName: String,
  modules: [{ type: Types.ObjectId, ref: "Module" }],
});

const Course = model("Course", CourseSchema, "Courses");
const Module = model("Module", ModuleSchema, "Modules");

/**
 @route   GET /courses
 @desc    Fetches all courses
 @access  Public
 @returns JSON object containing a subset of course fields from the database along with a
          generated URL which the client application can use to access an image
 */
app.get("/courses", (req, res) => {
  //get base url to be used for image access
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  //from database, return all courses, with the fields specified, append a generated url
  //pointing at the locally (on the server) stored file
  Course.find({})
    .select("title description duration imageName")
    .lean()
    .then((courses) => {
      const updatedCourses = courses.map((course) => ({
        ...course,
        imageUrl: `${baseUrl}/images/${course.imageName}`,
      }));

      res.json(updatedCourses);
    })

    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving courses");
    });
});

/**
 @route   GET /courses/:id
 @desc    Fetches one course by its id along with its associated modules
 @access  Public
 @returns JSON object containing all course fields from the database along with a
          generated URL which the client application can use to access an image
 */
app.get("/courses/:courseId", (req, res) => {
  //get base url to be used for image access
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  //from database, return the specified course by id, append a generated url
  //pointing at the locally (on the server) stored file
  Course.findById(req.params.courseId)
    .populate("modules")
    .lean()
    .then((detailedCourse) => {
      if (!detailedCourse) {
        return res.status(404).send("Course not found");
      }

      const updatedCourse = {
        ...detailedCourse,
        imageUrl: `${baseUrl}/images/${detailedCourse.imageName}`,
      };

      res.json(updatedCourse);
    })

    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving course");
    });
});

/**
 @route   POST /course
 @desc    Creates a new course
 @access  Public
 @body    content (json)
 @returns JSON object with the created course
 */
app.post("/course", async (req, res) => {
  //create new model + add generated id field
  const newCourse = new Course({
    ...req.body,
    _id: new Types.ObjectId(),
  });

  try {
    await newCourse.save();
    res.status(201).send(newCourse);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
