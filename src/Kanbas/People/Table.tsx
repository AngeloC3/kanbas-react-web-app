import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { enrollments, users } from "../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const enrolledUsers = enrollments
    .filter((enrollment: any) => enrollment.course === cid)
    .map((enrollment) => users.find((user: any) => user._id === enrollment.user));

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>

          {enrolledUsers.map((user : any) =>
            <tr>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}