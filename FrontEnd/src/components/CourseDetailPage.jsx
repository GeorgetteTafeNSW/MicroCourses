/*
CourseDetailPage.jsx

The react component displays the in depth details of a specific course by querying
the server for course information and then updating the UI using a react hook.

Uses a flexbox to display the header items (image, title, enrol button) evenly across
the available space.

Uses the react-tabs package to display course description and modules in separate tabs
for readability
*/

//import react-tabs library for displaying course information in a user friendly manner
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//import react hooks useState and useEffect to update UI as data changes
import { useEffect, useState } from "react";

//import axios to allow for making calls to the back-end API
import axios from "axios";

//import useParams to pull the courseId from the url
import { useParams } from "react-router-dom";

//import Modal to show popup when user clicks Enrol! button
import Modal from "react-modal";

//import css and config files
import "./css/CourseDetailPage.css";
import config from "../config";

function CourseDetailPage() {
  //get courseId from url
  const { courseId } = useParams();
  //add hooks to update UI when course data has been retrieved from server
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        //get course data from server
        const response = await axios.get(
          `${config.apiBaseUrl}/courses/${courseId}`
        );
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCourseDetails();
  }, [courseId]);

  //add hook to show modal form when user presses Enrol! button
  const [enrolledOpen, setEnrolledOpen] = useState(false);
  const toggleEnrolledOpen = () => {
    setEnrolledOpen(!enrolledOpen);
  };

  //when loading of data from the server is complete, show the course information in a user 
  //friendly manner
  if (!loading) {
    return (
      <div className="main">
        <div className="header">
          <img src={course.imageUrl} />
          <h1>{course.title}</h1>
          <button onClick={toggleEnrolledOpen}>Enrol</button>
        </div>

        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Modules</Tab>
          </TabList>

          <TabPanel>
            <div className="description">
              {course.longDescription}
            </div>
          </TabPanel>
          <TabPanel>
            <ul>
              {course.modules.map((module, index) => (
                <li key={index}>{module.name}</li>
              ))}
            </ul>
          </TabPanel>
        </Tabs>

        <Modal isOpen={enrolledOpen} onRequestClose={toggleEnrolledOpen}>
          <p>Woo!</p>
        </Modal>
      </div>
    );
  }
}

export default CourseDetailPage;
