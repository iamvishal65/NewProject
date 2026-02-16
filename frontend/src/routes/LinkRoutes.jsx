import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import CheckLogin from "../components/common/CheckLogin";
import AppLayout from "../pages/project/AppLayout/AppLayout";
import Home from "../pages/Home/Home";
import MyProject from "../pages/project/myproject/MyProject";
import Repos from "../pages/Repos/Repos";
import DataProject from "../pages/project/data/DatagProject";
import StudentRegister from "../pages/role/student/StudentRegister";

const LinkRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CheckLogin/>}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/myProject" element={<MyProject />} />
            <Route path="/repos" element={<Repos/>} />
            <Route path="/dataProject" element={<DataProject/>} />
             <Route path="/studentRegister" element={<StudentRegister/>} />
          </Route>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default LinkRoutes;
