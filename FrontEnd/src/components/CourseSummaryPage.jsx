/*
CourseSummaryPage.jsx

The react component displays all courses available as part of the MicroCourses offering.

Parameters: course object, button handler

Facilitates passing the course id back to a predefined function (in this case used
to navigate to the specific course page)
*/

//import useNavigate to allow for browsing to specific course pages
import { useNavigate } from "react-router-dom";

//import react hooks useState and useEffect to update UI as data changes
import { useEffect, useState } from "react";

//import axios to allow for making calls to the back-end API
import axios from "axios";

//import custom react component to display basic information about each course as part of
//a list on this page
import CourseSummaryItem from "./CourseSummaryItem";

//import css and config files
import "./css/CourseSummaryPage.css";
import config from "../config";

function CourseSummaryPage() {
  //allow for navigation to course detail page
  const navigate = useNavigate();
  //add hook to update UI when courses are returned by API
  const [courses, setCourses] = useState([]);
  //define function which takes in a courseId and then navigates to that courses's page
  const navigateToCourse = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        //get all courses from server
        const response = await axios.get(`${config.apiBaseUrl}/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCourses();
  }, []);

  //for each course returned by the server, display a CourseSummaryItem component with
  //the relevant information. Pass the handleButtonClick argument so that 
  return (
    <div className="main">
      <h1>Micro Courses</h1>
      <div className="courses">
        {courses.map((course) => (
          <CourseSummaryItem
            course={course}
            onShowDetails={navigateToCourse}
            key={course._id}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseSummaryPage;
