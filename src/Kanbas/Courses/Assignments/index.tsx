import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Search from "./Search"
import ModulesControls from "./ModuleControls";
import Clipboard from "./Clipboard";

export default function Assignments() {
    return (
    <div id="wd-assignments" >
    <ModulesControls/>
    <Search/> 
      <div id="wd-assignments-title">
      <br /><br /><br /><br />
  <ul id="wd-assignments-title" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS 40% of Total
        <AssignmentControlButtons />       
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <Clipboard/>
            <a className="wd-assignment-link "
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <div id="wd-p-tag">
                 Multiple Modules | Not available until  May 6 at 12:00am | Due May 13 at  11:59 pm | 100 pts
             </div>
          <AssignmentControlButtons />        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <Clipboard/>

          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <div id="wd-p-tag">
                 Multiple Modules | Not available until  May 13 at 12:00am | Due May 20 at  11:59 pm | 100 pts
             </div>
          <AssignmentControlButtons />        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <Clipboard/>


        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
            <div id="wd-p-tag">
                 Multiple Modules | Not available until  May 20 at 12:00am | Due May 27 at  11:59 pm | 100 pts
             </div>
          <AssignmentControlButtons />  
        </li>
      </ul>
    </li>
      </ul>
</div>
</div>

  );}
  