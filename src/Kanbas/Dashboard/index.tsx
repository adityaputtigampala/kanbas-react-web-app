import { Link } from "react-router-dom";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  {" "}
                  <img src="/images/reactjs.jpg" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                    </span>

                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <a
                      href="#/Kanbas/Courses/1234/Home"
                      className="btn btn-primary"
                    >
                      {" "}
                      Go{" "}
                    </a>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>

                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/*import { Link } from "react-router-dom";
import db from "../Database";
import Courses from "../Courses";
import React, { useState } from "react";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
  }) 
  {
  
  { const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value }) }/><hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src={course.imageUrl} height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>

                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

    /* return test test(
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/reactjs.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/cooking.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1235/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1235 Cooking
              </a>
              <p className="wd-dashboard-course-title card-text">
                Cooking Class
              </p>
              <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/swimming.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1236/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1236 Swimming 
              </a>
              <p className="wd-dashboard-course-title card-text">
                Swimming Class
              </p>
              <a href="#/Kanbas/Courses/1236/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/biking.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1237/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1237 Biking
              </a>
              <p className="wd-dashboard-course-title card-text">
                Biking Class
              </p>
              <a href="#/Kanbas/Courses/1237/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/pingpong.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1238/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1238 Ping Pong
              </a>
              <p className="wd-dashboard-course-title card-text">
                Ping Pong Class
              </p>
              <a href="#/Kanbas/Courses/1238/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/chess.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1239/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1239 Chess
              </a>
              <p className="wd-dashboard-course-title card-text">
                Chess Class
              </p>
              <a href="#/Kanbas/Courses/1239/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/gardening.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1240/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1240 Gardening
              </a>
              <p className="wd-dashboard-course-title card-text">
                Gardening Class
              </p>
              <a href="#/Kanbas/Courses/1240/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/reading.jpg"/>
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1241/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1241 Reading 
              </a>
              <p className="wd-dashboard-course-title card-text">
                Reading Class
              </p>
              <a href="#/Kanbas/Courses/1241/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>

  );}
  */