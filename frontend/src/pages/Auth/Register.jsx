import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import axiosInstance from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate();
  async function handleSubmit(data) {
    try {
      const res = await axiosInstance.post("/api/auth/user/register", data);
      if (res.data.success) {
        alert("registered")
      }else{
        console.log("error"+res.data);
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return <RegisterForm onSubmit={handleSubmit} />;
};

export default Register;
