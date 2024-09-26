import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css"


export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="Courses" element={<h2>Courses</h2>} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="Calender" element={<h2>Calender</h2>} />
          <Route path="Inbox" element={<h2>Inbox</h2>} />
        </Routes>
      </div>
    </div>
);}