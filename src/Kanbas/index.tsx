import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProtectedRouteLoggedIn from "./Account/ProtectedRouteLoggedIn";
import ProtectedRouteEnrolled from "./Courses/ProtectedRouteEnrolled";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId); // assignment has this as status =
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  );};

  return (
      <Session>
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
      </Session>
);}