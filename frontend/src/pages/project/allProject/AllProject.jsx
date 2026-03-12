import React from 'react'
import ProjectCard from '../projectcard/ProjectCard'

const AllProject = () => {
  return (
    <div>
      <ProjectCard path={`/api/project/user/everyProject`}  allowDelete={false} />
      
    </div>
    
  )
}

export default AllProject
