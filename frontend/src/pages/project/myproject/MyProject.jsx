import React from 'react'
import MyProjectStructure from './MyProjectStructure'
import ProjectCard from '../projectcard/ProjectCard'
import axiosInstance from '../../../api/authApi'

const MyProject = () => {
  async function githubAccess(){
    try {
      const res = await axiosInstance.get("/api/auth/github/check");
      // axios response body is in res.data
      if (!res?.data?.connected) {
        // redirect user to backend oauth redirect
        window.location.href = "http://localhost:5000/api/auth/github/redirect";
      } else {
        // optional: show a toast / feedback that GitHub already connected
        console.log("Github already connected");
      }
    } catch (error) {
      console.log("Github access error:", error);
    }
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4">
      <MyProjectStructure handleClick={githubAccess}/>
      <ProjectCard/>
    </div>
  )
}

export default MyProject

