import { Link, useLocation, useParams } from "react-router-dom";
import { IoHomeOutline, IoRocketOutline, IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { FaCubes } from "react-icons/fa";
import { BsPlug } from "react-icons/bs";
import { MdOutlineAssignment, MdOutlineAssignmentTurnedIn } from "react-icons/md";

export default function CoursesNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);
  const { cid } = useParams();
  const links = [
    { label: "Home", ext: "Home", icon: IoHomeOutline },
    { label: "Modules", ext: "Modules", icon: FaCubes },
    { label: "Piazza", ext: "Piazza", icon: BsPlug },
    { label: "Zoom", ext: "Zoom", icon: BsPlug },
    { label: "Assignments", ext: "Assignments", icon: MdOutlineAssignment },
    { label: "Quizzes", ext: "Quizzes", icon: IoRocketOutline },
    { label: "Grades", ext: "Grades", icon: MdOutlineAssignmentTurnedIn },
    { label: "People", ext: "People", icon: IoPeopleOutline },
    { label: "Settings", ext: "Settings", icon: IoSettingsOutline },
  ]

  return (
    <div 
      id="wd-courses-navigation" 
      className="wd list-group fs-5 rounded-0 d-none d-lg-block">

      {links.map((link) => (  
        <Link 
          key={link.label} 
          className={"list-group-item border border-0"}  
          to={`/Kanbas/Courses/${cid}/${link.ext}`}
        >
          <span className={`${isActive(`/Kanbas/Courses/${cid}/${link.ext}`) ? 'border-start border-3 border-black pe-2' : ''}`}></span>
          {link.icon({ className: `me-1 ${isActive(`/Kanbas/Courses/${cid}/${link.ext}`) ? 'text-black' : 'text-danger'}`}  )}
          <span className={`${isActive(`/Kanbas/Courses/${cid}/${link.ext}`) ? 'text-black' : 'text-danger'}`}>{link.label}</span>
        </Link>
      ))}

    </div>
  );
}
