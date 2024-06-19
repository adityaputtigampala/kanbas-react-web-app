import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Search from "./Search"
import ModulesControls from "./ModuleControls";
import Clipboard from "./Clipboard";
import { useNavigate, useParams } from "react-router";
import db from "../../Database";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function AssignmentEditor() {
    const { cid, aid } = useParams();

    
    const myAssignments = db.assignments.find(
        (myAssignments) => myAssignments._id == aid);

    const setAssignment = useState();

    const navigate = useNavigate();
    console.log('CourseID:', cid, 'AssignmentID', aid);

    
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      };

  
    return (
        <div id="wd-assignments-editor" className="container">
          <div className="row mb-2">
            <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
            <div className="col-sm-10">
              <input id="wd-name" value={myAssignments?.title || " "} className="form-control" readOnly />
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm">
              <textarea id="wd-description" className="form-control" readOnly>
                {myAssignments?.description}
              </textarea>
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
            <div className="col-sm-10">
              <input id="wd-points" value={myAssignments?.Points} className="form-control" readOnly />
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
            <div className="col-sm-10">
              <select id="wd-group" className="form-select" value="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade As</label>
            <div className="col-sm-10">
              <select id="wd-display-grade-as" className="form-select" value="Percentage">
                <option value="Percentage">Percentage</option>
              </select>
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
            <div className="col-sm-10">
              <select id="wd-submission-type" className="form-select" value="Online" >
                <option value="Online">Online</option>
              </select>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-sm-2">
              Online Entry Options
            </div>
            <div className="col-sm-8">
              <div className="form-check">
                <input type="checkbox" name="text-entry" id="wd-text-entry" className="form-check-input" readOnly />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="website-url" id="wd-website-url" className="form-check-input" readOnly />
                <label htmlFor="wd-website-url" className="form-check-label">Website Url</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="form-check-input" readOnly />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="student-annotations" id="wd-student-annotations" className="form-check-input" readOnly />
                <label htmlFor="wd-student-annotations" className="form-check-label">Student Annotations</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="File-Uploads" id="wd-file-uploads" className="form-check-input" readOnly />
                <label htmlFor="wd-file-uploads" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign To</label>
            <div className="col-sm-10">
              <input id="wd-assign-to" value="Everyone" className="form-control" readOnly />
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due</label>
            <div className="col-sm-10">
              <input type="date" id="wd-due-date" value={myAssignments?.duedate} className="form-control" readOnly />
            </div>
          </div>
          <div className="row mb-1">
            <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available from</label>
            <div className="col-sm-10">
              <input type="date" id="wd-available-from" value={myAssignments?.availabledate} className="form-control" readOnly />
            </div>
          </div>
          <div className="row">
            <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Until</label>
            <div className="col-sm-10">
              <input type="date" id="wd-available-until" value={myAssignments?.availabledate} className="form-control" readOnly />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel" className="btn btn-secondary me-2">Cancel</Link>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-save" className="btn btn-danger">Save</Link>
            </div>
          </div>
        </div>
      );
}
export default AssignmentEditor;