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
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  