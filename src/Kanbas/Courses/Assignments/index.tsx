import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Search from "./Search"
import ModulesControls from "./ModuleControls";
import Clipboard from "./Clipboard";
import { useParams } from "react-router";
import db from "../../../Kanbas/Database";

export default function Assignments() {
  const { cid, aid } = useParams();
  const modules = db.modules;
  
  return (
    <div id="wd-assignments">
      <ModulesControls/>
      <Search/> 
      <div id="wd-assignments-title">
        <br /><br /><br /><br />
        <ul className="list-group rounded-0">
          {db.assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li key={assignment.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  ASSIGNMENTS 40% of Total
                  <AssignmentControlButtons />       
                </div>  
                <ul className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <Clipboard/>
                    <a className="wd-assignment-link"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </a>
                    
                    <div id="wd-p-tag">
                      <span className="red-text">Multiple Modules</span> | 
                      <strong>Not available until</strong> {assignment.availabledate} | 
                      <strong>Due</strong> {assignment.duedate} | 
                      {assignment.Points} pts
                    </div>
                    <AssignmentControlButtons />
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
  