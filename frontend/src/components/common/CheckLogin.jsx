import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axiosInstance from "../../api/authApi";
import { useRecoilState } from "recoil";
import { userData } from "../../recoil/UserData";

const CheckLogin = () => {
  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useRecoilState(userData);
  const location = useLocation(); // 🔹 get current URL

  useEffect(() => {
    async function loginCheck() {
      try {
        const res = await axiosInstance.get("/api/auth/logincheck");

        if (res.data.loggedIn) {
          setLoggedIn(true);
          setData(res.data.user);
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        console.log("hellop");
        console.error("Login check failed:", err);
        setLoggedIn(false);
      } finally {
        setChecking(false);
      }
    }

    loginCheck();
  }, [setData]);

  // 🔹 While verifying login state
  if (checking) return <p>⏳ Checking login...</p>;

  // 🔹 Only redirect to /login if not logged in and not already there
  if (!loggedIn && location.pathname !== "/login" && location.pathname !== "/register") {
    return <Navigate to="/register" replace />;
  }

  // 🔹 If logged in, render child routes
  return <Outlet />;
};

export default CheckLogin;
