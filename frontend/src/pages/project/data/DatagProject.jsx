import React from 'react'
import DataProjectStructure from './DataProjectStructur'
import axiosInstance from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';

const dataProject = () => {
  const navigate=useNavigate();
    async function handleSubmit(data) {
        try {
          if (!data) throw new Error("Enter data");
            const resp=await axiosInstance.post("/api/project/user/create",data);
            if(resp.status!=201||resp.status==500) throw new Error("New project not created");
            navigate("/myproject");
        } catch (err) {
            console.error("Failed to save the project", err);
        }
    }
  return (
    <div>
      <DataProjectStructure onSubmit={handleSubmit}/>
    </div>
  )
}

export default dataProject
