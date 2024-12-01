import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    let user;
    try {
      user =  await client.signin(credentials);
    } catch {
      return;
    }
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };
  const autosignin = async (role: string) => {
    let user;
    try {
      if (role === "FACULTY") {
        user =  await client.signin({username: "ring_bearer", password: "shire123"});
      } else if (role === "ADMIN") {
        user = await client.signin({username: "iron_man", password: "stark123"});
      } else {
        user =  await client.signin({username: "dark_knight", password: "wayne123"});
      }
    } catch {
      return;
    }
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="form-control mb-2" placeholder="username" id="wd-username" />
      <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>

      {/* TODO COMMENT THIS */}
      <button onClick={() => autosignin("ADMIN")} id="wd-signin-btn" className="btn btn-primary w-100 mt-2" >Auto Sign in ADMIN (Dev)</button>
      <button onClick={() => autosignin("FACULTY")} id="wd-signin-btn" className="btn btn-primary w-100 mt-2" >Auto Sign in FACULTY (Dev)</button>
      <button onClick={() => autosignin("STUDENT")} id="wd-signin-btn" className="btn btn-primary w-100 mt-2" >Auto Sign in STUDENT (Dev)</button>

      <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
    </div>
);}
