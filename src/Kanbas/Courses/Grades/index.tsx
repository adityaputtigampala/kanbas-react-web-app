import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Grades() {
    return (
        <div id="wd-css-styling-dropdowns" >
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
                    <select className="form-select">
                        <option selected>.... Search Assignments</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                </div>
            </div>
            <div id="wd-css-styling-tables">
                <h2>Tables</h2>
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
                        <tr className="table-white"><td>Abi Jones</td><td>100%</td><td>70%</td><td>85%</td></tr>
                        <tr className='table-secondary'><td>Mike Tom</td><td>95%</td><td>70%</td><td>90%</td></tr>
                        <tr className='table-white'><td>Jones Abi</td><td>90%</td><td>70%</td><td>90%</td></tr>
                        <tr className='table-secondary'><td>Tom Mike</td><td>60%</td><td>70%</td><td>90%</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}