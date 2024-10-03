import { Link, useLocation  } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoInformationCircleOutline  } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div 
      id="wd-kanbas-navigation" 
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-lg-block bg-black z-2" 
      style={{ width: 120 }}>

      <a id="wd-neu-link" target="_blank" rel="noreferrer" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" alt="NEU" width="75px" /></a>

      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Account") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <FaRegCircleUser className={`fs-1 text ${
          isActive("/Kanbas/Account") ? "text-red" : "text-white"
        }`} /> <br />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Dashboard") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>

      <Link to="/Kanbas/Courses" id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Courses") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>

      <Link to="/Kanbas/Calender" id="wd-calender-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Calender") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calender </Link>

      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Inbox") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox </Link>

      <Link to="/Labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs </Link>
      
      <Link to="/Landing" id="wd-landing-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Landing") ? "bg-white text-danger" : "bg-black text-white"
        }`}>
        <IoInformationCircleOutline className="fs-1 text-danger" /><br />
        Landing Page </Link>
      
    </div>
);}

