export default function Dashboard() {
    return (
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
  