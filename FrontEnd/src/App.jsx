/*
App.jsx

Handles all routing in the application, namely between the home page (CourseSummaryPage)
and the individual course pages (CourseDetailPage)
*/

//imports required routing packages from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import custom react components
import CourseSummaryPage from "./components/CourseSummaryPage.jsx";
import CourseDetailPage from "./components/CourseDetailPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseSummaryPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
