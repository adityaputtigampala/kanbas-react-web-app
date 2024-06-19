import "./index.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const createNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? "list-group-item active" : "list-group-item text-danger";
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation"  className="list-group fs-5 rounded-0 ">
      {links.map(link => (
        <NavLink
          to={link}
          className={createNavLinkClass}
        >
          {link}
        </NavLink>
      ))}

      {/** 
      <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
         className="list-group-item active border border-0"> Home </a>
      <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
         className="list-group-item text-danger border border-0"> Modules </a>
      <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
         className="list-group-item text-danger border border-0"> Piazza </a>
      <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
         className="list-group-item text-danger border border-0"> Zoom </a>
      <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
         className="list-group-item text-danger border border-0"> Assignments </a>
      <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
         className="list-group-item text-danger border border-0"> Quizzes </a>
      <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
         className="list-group-item text-danger border border-0"> Grades </a>*/}
    </div>
  );
}