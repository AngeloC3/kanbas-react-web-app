import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css"
import store from "./store";
import { Provider } from "react-redux";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRouteLoggedIn from "./Account/ProtectedRouteLoggedIn";
import ProtectedRouteEnrolled from "./Courses/ProtectedRouteEnrolled";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
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


  return (
      <Provider store={store}>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" 
              element={
                <ProtectedRouteLoggedIn>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}/>
                </ProtectedRouteLoggedIn>
              } />         
            <Route path="/Courses" element={<h2>Courses</h2>} />
            <Route path="Courses/:cid/*" 
              element={
                <ProtectedRouteLoggedIn>
                  <ProtectedRouteEnrolled>
                    <Courses courses={courses} />
                  </ProtectedRouteEnrolled>
                </ProtectedRouteLoggedIn>
              } 
            />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
          </Routes>
        </div>
      </div>
    </Provider>
);}