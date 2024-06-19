import { relative } from 'path';
import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { BiSolidFileImport } from "react-icons/bi";
import { FaFileExport } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import db from "../../Database";





export default function Grades() {
    const { cid } = useParams();
    const course = db.courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    const assignments = db.assignments.filter((assignment) => assignment.course == cid);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course == cid);
    // const users = enrollments.map(enrollment => db.users.find(user => user._id == enrollment.user));
    /*const grade = db.grades.find(grade => grade.student === users && grade.assignment === assignmentId);*/


        
    ;    return (
        
        
        <div id="wd-css-styling-dropdowns" className="container">
             <div className="row mb-3">
                <div className="col text-end">
                    <div className="btn-group">
                        <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1">
                            <BiSolidFileImport className="me-2" style={{ position: "relative", bottom: "1px" }} />
                            Import
                        </button>
                        <div className="btn-group">
                        <button id="wd-export-btn" className="btn btn-lg btn-secondary me-1 dropdown-toggle" data-bs-toggle="dropdown" >
                                <FaFileExport className="me-2" style={{ position: "relative", bottom: "1px" }} />
                                Export
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item1">Thing 1</a></li>
                                <li><a className="dropdown-item2">Thing 2</a></li>
                                <li><a className="dropdown-item3" >Thing 3</a></li>
                            </ul>
                        </div>
                        
                        <button id="wd-settings-btn" className="btn btn-lg btn-secondary me-1">
                            <FaGear className="me-2" style={{ position: "relative", bottom: "1px" }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h5>Student Names</h5>
                    <div className="position-relative">
                        <FaMagnifyingGlass className="position-absolute top-50 start-0 translate-middle-y ms-2" />
                        <select className="form-select ps-5">
                            <option selected>.... Search Students</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                
                <div className="col">
                    <h5>Assignment Names</h5>
                    <div className="position-relative">
                        <FaMagnifyingGlass className="position-absolute top-50 start-0 translate-middle-y ms-2" />
                        <select className="form-select ps-5">
                            <option selected>.... Search Assignments</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="wd-modules-controls" className="mb-3">
                <button id="wd-apply-filters-btn" className="btn btn-lg btn-secondary me-1">
                    <IoFunnelOutline className="me-2" style={{ position: "relative", bottom: "1px" }} />
                    Apply Filters
                </button>
            </div>

            <div id="wd-css-styling-tables">
                <table className="table">
                    <thead>
                        <tr className="table-secondary">
                            <th>Student Name</th>
                            {assignments.map((assignment)=>(<th>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                                {enrollments.map((enrollment) => {
                                const user = db.users.find((user) => user._id === enrollment.user);
                                return (
                    <tr>
                        {/* TA assistance for below code */}
                    <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);})}
                    </tr>);
                                })}
                    </tbody>
                    {/* <tbody>
                        {users.map((user) => (
                            <tr className= 'table-white' >
                                <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => (

                                    const grade = db.grades.find(
                                        (grade) => grade.student===enrollments.user
                                    )

                     
                                
                                ))}
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
}
