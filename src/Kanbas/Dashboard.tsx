import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./People/enrollmentsReducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleUnenroll = (enrollmentId: any) => {
    dispatch(deleteEnrollment(enrollmentId));
  };
  const handleEnroll = (enrollmentInfo: any) => {
    dispatch(addEnrollment(enrollmentInfo));
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser.role === 'STUDENT' && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-info" onClick={toggleEnrollments}>
            {showAllCourses ? 'Show Enrolled Courses' : 'Show All Courses'}
          </button>
        </div>
      )}

      {currentUser.role === 'FACULTY' && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h5>New Course ...</h5>
            <div>
              <button className="btn btn-warning me-2" onClick={updateCourse} id="wd-update-course-click">
                Update
              </button>
              <button className="btn btn-primary me-1" id="wd-add-new-course-click" onClick={addNewCourse}>
                Add
              </button>
            </div>
          </div>
          <br />
          <input defaultValue={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea defaultValue={course.description} className="form-control mb-2" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses ? courses : courses.filter((course) =>
            enrollments.some((enrollment: any) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
            )
          )).map((course) => {
            const isEnrolled = enrollments.some((enrollment: any) => enrollment.course === course._id && enrollment.user === currentUser._id);
            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                    <img src="/images/reactjs.jpg" width="100%" height={160} alt="react" />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      {currentUser.role === 'STUDENT' && (
                        <>
                          {isEnrolled ? (
                            <button onClick={(event) => {
                              event.preventDefault();
                              const enrollmentId = enrollments.find((enrollment: { user: any; course: any; }) => 
                                enrollment.user === currentUser._id && enrollment.course === course._id
                              )?._id;
                              
                              if (enrollmentId) {
                                handleUnenroll(enrollmentId);
                              }
                            }} className="btn btn-danger float-end">
                              Unenroll
                            </button>
                          ) : (
                            <button onClick={(event) => {
                              event.preventDefault();
                              handleEnroll({user: currentUser._id, course: course._id}); 
                            }} className="btn btn-success float-end">
                              Enroll
                            </button>
                          )}
                        </>
                      )}

                      {currentUser.role === 'FACULTY' && (
                        <>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end" id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click" onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }} className="btn btn-warning me-2 float-end">
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
