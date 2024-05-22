export default function Modules() {
    return (
      <div>
        {/* Collapse All button, View Progress button, etc. */}
        <div className="wd-module-buttons">
            <button id="wd-btn-collapse-all">Collapse All</button>
            <button id="wd-btn-view-progress">View Progress</button>
            <button id="wd-btn-view-progress">View Progress</button>
            <label htmlFor="wd-select-one-publish-all"></label><br/>
                <select id="wd-select-one-publish-all">
                <option value="Publish All">Publish All</option>
                <option value="Week2">Week 2</option>
                </select>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a react application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Intro to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting web content with Headings and </li>
                  <li className="wd-content-item">Formatting content with lists and tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  