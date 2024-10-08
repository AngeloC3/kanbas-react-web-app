import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoInformationCircleOutline  } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    { label: "Landing Page", path: "/Landing", icon: IoInformationCircleOutline}
  ];


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
          isActive("/Kanbas/Account") ? "text-danger" : "text-white"
        }`} /> <br />
        Account </Link>

      {links.map((link) => (
        <Link key={link.label} to={link.path} className={`list-group-item bg-black text-center border-0
              ${isActive(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}

      
    </div>
);}

