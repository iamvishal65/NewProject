import React from 'react'
import ProjectCard from '../../pages/project/projectcard/ProjectCard'

const AllProject = () => {
  return (
    <div>
      <ProjectCard path={`/api/project/user/everyProject`}  allowDelete={false} />
      
    </div>
    
  )
}

export default AllProject
