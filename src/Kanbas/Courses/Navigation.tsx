import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoRocketOutline, IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { FaCubes } from "react-icons/fa";
import { BsPlug } from "react-icons/bs";
import { MdOutlineAssignment, MdOutlineAssignmentTurnedIn } from "react-icons/md";

export default function CoursesNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        id="wd-course-home-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Home"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Home') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <IoHomeOutline className={`me-1 ${isActive('/Kanbas/Courses/1234/Home') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Home') ? 'text-black' : 'text-danger'}`}>Home</span>
      </Link>

      <Link 
        id="wd-course-modules-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Modules"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Modules') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <FaCubes className={`me-1 ${isActive('/Kanbas/Courses/1234/Modules') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Modules') ? 'text-black' : 'text-danger'}`}>Modules</span>
      </Link>

      <Link 
        id="wd-course-piazza-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Piazza"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Piazza') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <BsPlug className={`me-1 ${isActive('/Kanbas/Courses/1234/Piazza') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Piazza') ? 'text-black' : 'text-danger'}`}>Piazza</span>
      </Link>

      <Link 
        id="wd-course-zoom-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Zoom"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Zoom') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <BsPlug className={`me-1 ${isActive('/Kanbas/Courses/1234/Zoom') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Zoom') ? 'text-black' : 'text-danger'}`}>Zoom</span>
      </Link>

      <Link 
        id="wd-course-quizzes-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Assignments"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Assignments') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <MdOutlineAssignment className={`me-1 ${isActive('/Kanbas/Courses/1234/Assignments') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Assignments') ? 'text-black' : 'text-danger'}`}>Assignments</span>
      </Link>

      <Link 
        id="wd-course-quizzes-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Quizzes"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Quizzes') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <IoRocketOutline className={`me-1 ${isActive('/Kanbas/Courses/1234/Quizzes') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Quizzes') ? 'text-black' : 'text-danger'}`}>Quizzes</span>
      </Link>

      <Link 
        id="wd-course-grades-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Grades"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Grades') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <MdOutlineAssignmentTurnedIn className={`me-1 ${isActive('/Kanbas/Courses/1234/Grades') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Grades') ? 'text-black' : 'text-danger'}`}>Grades</span>
      </Link>

      <Link 
        id="wd-course-people-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/People"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/People') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <IoPeopleOutline className={`me-1 ${isActive('/Kanbas/Courses/1234/People') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/People') ? 'text-black' : 'text-danger'}`}>People</span>
      </Link>

      <Link 
        id="wd-course-settings-link" 
        className={"list-group-item border border-0"}  
        to="/Kanbas/Courses/1234/Settings"
      >
        <span className={`${isActive('/Kanbas/Courses/1234/Settings') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <IoSettingsOutline className={`me-1 ${isActive('/Kanbas/Courses/1234/Settings') ? 'text-black' : 'text-danger'}`} />
        <span className={`${isActive('/Kanbas/Courses/1234/Settings') ? 'text-black' : 'text-danger'}`}>Settings</span>
      </Link>
    </div>
  );
}
