import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image"/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1235/Home">
              CS1235 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Back end software developer
            </p>
            <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1233/Home">
              CS1233 React TS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer with TypeScript
            </p>
            <Link to="/Kanbas/Courses/1233/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1232/Home">
              CS1232 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Machine Learning
            </p>
            <Link to="/Kanbas/Courses/1232/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1231/Home">
              CS1231 Groovy
            </Link>
            <p className="wd-dashboard-course-title">
              Get Groovy with it
            </p>
            <Link to="/Kanbas/Courses/1231/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1230/Home">
              CS1230 Rust
            </Link>
            <p className="wd-dashboard-course-title">
              For the rusty!
            </p>
            <Link to="/Kanbas/Courses/1230/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="course_image" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1237/Home">
              CS1234 Fundamentals
            </Link>
            <p className="wd-dashboard-course-title">
              Fundies!
            </p>
            <Link to="/Kanbas/Courses/1237/Home"> Go </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
