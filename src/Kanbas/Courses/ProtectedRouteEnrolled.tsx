import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import * as db from "../Database";

export default function ProtectedRouteEnrolled({ children }: { children: any }) {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const courses = db.courses;
  const course = courses.find((course: any) => course._id === cid);
  let isEnrolled = false;
  if (course) {
    isEnrolled = enrollments.some((enrollment: any) => enrollment.course === course._id && enrollment.user === currentUser._id);
  }

  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}
