import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { TiCancel } from "react-icons/ti";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      
      
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}
