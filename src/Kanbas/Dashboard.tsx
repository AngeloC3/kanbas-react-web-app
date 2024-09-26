import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text ">
                    Full Stack software developer<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1235/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Java
                  </h5>
                  <p className="card-text">
                    Back end software developer<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1233/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1233 React TS
                  </h5>
                  <p className="card-text">
                    Full Stack TS developer<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1232/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1232 Python
                  </h5>
                  <p className="card-text">
                    Machine Learning<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1231/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1231 Groovy
                  </h5>
                  <p className="card-text">
                    Get Groovy with it<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1230/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1230 Rust
                  </h5>
                  <p className="card-text">
                    For the rusty!<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1237/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="react" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 Fundamentals
                  </h5>
                  <p className="card-text">
                    Fundies!<br />Fall 2024 - Sec 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
