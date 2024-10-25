import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteRole({ role, children }: { role: String, children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    if (currentUser.role === role) {
      return children;
    }
    return <Navigate to="/Kanbas/Account/Profile" />
  }
  return <Navigate to="/Kanbas/Account/Signin" />;
}
