/*
CourseDetailPage.jsx

The react component displays the high level details of a course including title,
description and duration.

Parameters: course object, button handler

Facilitates passing the course id back to a predefined function (in this case used
to navigate to the specific course page)

Uses a flexbox to display the course title and image in a row.

Uses a flexbox to display the header, description, duration and More? buttons for
the course
*/

//import css file
import "./css/CourseSummaryItem.css";

//show the course information in a user friendly manner
const CourseSummaryItem = ({ course, onShowDetails }) => {
  return (
    <div className="courseItem">
      <div className="courseHeader">
        <h2>{course.title}</h2>
        <img className="imageThumbnail" src={course.imageUrl} />
      </div>
      <p className="courseInfo">Description: {course.description}</p>
      <p className="courseInfo">Completion Time: {course.duration} hours</p>
      <button
        className="showDetail"
        //onClick pass the courseId back to the button handler passed in as a 
        //parameter to this component
        onClick={() => onShowDetails(course._id)}
      >
        More?
      </button>
    </div>
  );
};

export default CourseSummaryItem;
