import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
