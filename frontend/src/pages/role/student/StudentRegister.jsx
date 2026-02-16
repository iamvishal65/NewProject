import React from "react";
import axiosInstance from "../../../api/authApi";
import { useNavigate } from "react-router-dom";
import StudentRegisterForm from "./StudentRegisterForm";

const StudentRegister = () => {
  const navigate = useNavigate();
  async function handleSubmit(data) {
    try {
      const res = await axiosInstance.post("/api/auth/student/register", data);
      if (res.status != 201) throw new Error(res.data.message);
      navigate("/myproject");
    } catch (error) {
      console.log(error);
      
    }
  }

  return <StudentRegisterForm onSubmit={handleSubmit} />;
};

export default StudentRegister;
