import React from 'react'
import MentorRegisterForm from './MentorRegisterForm';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/authApi';


const MentorRegister = () => {
  const navigate = useNavigate();
  async function handleSubmit(data) {
    try {
      const res = await axiosInstance.post("/api/auth/mentor/register", data);
      if (res.status != 201) throw new Error(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      
    }
  }

  return <MentorRegisterForm onSubmit={handleSubmit} />;
}

export default MentorRegister
