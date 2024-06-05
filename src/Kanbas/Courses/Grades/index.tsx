import { relative } from 'path';
import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { BiSolidFileImport } from "react-icons/bi";
import { FaFileExport } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";



export default function Grades() {
    return (
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
                            <th>A1 SETUP out of 100</th>
                            <th>A2 HTML out of 100</th>
                            <th>A3 CSS out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-white"><td>Abi Jones</td><td><input type="text" defaultValue="100%" className="form-control" /></td><td>70%</td><td>85%</td></tr>
                        <tr className='table-secondary'><td>Mike Tom</td><td>95%</td><td>70%</td><td>90%</td></tr>
                        <tr className='table-white'><td>Jones Abi</td><td>90%</td><td>70%</td><td>90%</td></tr>
                        <tr className='table-secondary'><td>Tom Mike</td><td>60%</td><td>70%</td><td>90%</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}