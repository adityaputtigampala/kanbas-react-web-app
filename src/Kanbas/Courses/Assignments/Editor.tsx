export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="row mb-2">
                <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                <div className="col-sm-10">
                    <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm">
                    <textarea id="wd-description" className="form-control" >
                        The assignment is available online Submit a link to the landing page of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </textarea>
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10">
                    <input id="wd-points" value={100} className="form-control" />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                <div className="col-sm-10">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade As</label>
                <div className="col-sm-10">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage">Percentage</option>
                    </select>
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10">
                    <select id="wd-submission-type" className="form-select">
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
                        <input type="checkbox" name="text-entry" id="wd-text-entry" className="form-check-input" />
                        <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="website-url" id="wd-website-url" className="form-check-input" />
                        <label htmlFor="wd-website-url" className="form-check-label">Website Url</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="form-check-input" />
                        <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="student-annotations" id="wd-student-annotations" className="form-check-input" />
                        <label htmlFor="wd-student-annotations" className="form-check-label">Student Annotations</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="File-Uploads" id="wd-file-uploads" className="form-check-input" />
                        <label htmlFor="wd-file-uploads" className="form-check-label">File Uploads</label>
                    </div>
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign To</label>
                <div className="col-sm-10">
                    <input id="wd-assign-to" value="Everyone" className="form-control" />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due</label>
                <div className="col-sm-10">
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available from</label>
                <div className="col-sm-10">
                    <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                </div>
            </div>
            <div className="row">
                <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Until</label>
                <div className="col-sm-10">
                    <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
                    <button id="wd-save" className="btn btn-danger">Save</button>
                </div>
            </div>
        </div>
    );
}