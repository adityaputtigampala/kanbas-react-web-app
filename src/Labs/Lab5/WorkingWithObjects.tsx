import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M001",
    name: "React Basics",
    description: "Learn the basics of React.js",
    course: "Web Development",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <div>
        <h5>Assignment</h5>
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-title"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-score"
          type="number"
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
        />
        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <input
          className="form-check-input"
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
      </div>

      <div>
        <h5>Module</h5>
        <a
          id="wd-get-module"
          className="btn btn-secondary"
          href={`${MODULE_API_URL}`}
        >
          Get Module
        </a>
        <a
          id="wd-get-module-name"
          className="btn btn-secondary"
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
        <a
          id="wd-update-module-name"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Name
        </a>
        <input
          className="form-control w-75"
          id="wd-module-name"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          id="wd-update-module-description"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Description
        </a>
        <input
          className="form-control w-75"
          id="wd-module-description"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
      </div>

      <hr />
    </div>
  );
}
