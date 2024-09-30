import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link 
        id="wd-account-signin-link" 
        className="list-group-item border border-0"  
        to="/Kanbas/Account/Signin"
      >
        <span className={`${isActive('/Kanbas/Account/Signin') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <span className={`${isActive('/Kanbas/Account/Signin') ? 'text-black' : 'text-danger'}`}>Signin</span>
      </Link>
      <Link 
        id="wd-account-signup-link" 
        className="list-group-item border border-0"  
        to="/Kanbas/Account/Signup"
      >
        <span className={`${isActive('/Kanbas/Account/Signup') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <span className={`${isActive('/Kanbas/Account/Signup') ? 'text-black' : 'text-danger'}`}>Signup</span>
      </Link>
      <Link 
        id="wd-account-profile-link" 
        className="list-group-item border border-0"  
        to="/Kanbas/Account/Profile"
      >
        <span className={`${isActive('/Kanbas/Account/Profile') ? 'border-start border-3 border-black pe-2' : ''}`}></span>
        <span className={`${isActive('/Kanbas/Account/Profile') ? 'text-black' : 'text-danger'}`}>Profile</span>
      </Link>
    </div>
  );
}
