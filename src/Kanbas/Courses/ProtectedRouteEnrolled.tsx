import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import * as userClient from "../Account/client";
import { useEffect, useState } from "react";

export default function ProtectedRouteEnrolled({ children }: { children: any }) {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const enrolledCourses = await userClient.findCoursesForUser(
          currentUser._id
        );
        const enrolledCourse = enrolledCourses.find(
          (enrollment: any) => enrollment._id === cid
        );
        if (enrolledCourse) {
          setIsEnrolled(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser && cid) {
      fetchCourses();
    }
  }, [currentUser, cid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}