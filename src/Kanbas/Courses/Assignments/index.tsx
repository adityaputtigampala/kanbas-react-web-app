import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Search from "./Search";
import ModulesControls from "./ModuleControls";
import Clipboard from "./Clipboard";
import {
  deleteAssignment,
  createAssignment,
  findAssignmentsForCourse,
  updateAssignment,
} from "./client";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const fetchAssignments = async () => {
    try {
      const assignments = await findAssignmentsForCourse(cid);
      setAssignments(assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  /*const handleCreateAssignment = async (assignment: any) => {
    try {
      const newAssignment = await createAssignment(cid, assignment);
      setAssignments([...assignments, newAssignment]);
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };*/

  /*const handleUpdateAssignment = async (id: string, updatedAssignment: any) => {
    try {
      const response = await updateAssignment({ ...updatedAssignment, _id: id });
      setAssignments(
        assignments.map((assignment) =>
          assignment._id === id ? response : assignment
        )
      );
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  const handleDeleteAssignment = async (id: string) => {
    try {
      await deleteAssignment(id);
      setAssignments(assignments.filter((assignment) => assignment._id !== id));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };*/

  return (
    <div id="wd-assignments">
      <ModulesControls />
      <Search />
      <div id="wd-assignments-title">
        <br />
        <br />
        <br />
        <br />
        <ul className="list-group rounded-0">
          {assignments.map((assignment: any) => (
            <li key={assignment._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS 40% of Total
                <AssignmentControlButtons
                  /*onEdit={(updatedAssignment: any) => handleUpdateAssignment(assignment._id, updatedAssignment)}
                  onDelete={() => handleDeleteAssignment(assignment._id)}*/
                />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <Clipboard />
                  <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a>
                  <div id="wd-p-tag">
                    <span className="red-text">Multiple Modules</span> |
                    <strong>Not available until</strong> {assignment.availabledate} |
                    <strong>Due</strong> {assignment.duedate} |
                    {assignment.points} pts
                  </div>
                  <AssignmentControlButtons
                    /*onEdit={(updatedAssignment) => handleUpdateAssignment(assignment._id, updatedAssignment)}
                    onDelete={() => handleDeleteAssignment(assignment._id)}*/
                  />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
