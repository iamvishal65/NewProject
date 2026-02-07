import React, { useEffect, useState } from "react";
import ProjectCardStructure from "./ProjectCardStructure";
import axiosInstance from "../../../api/authApi";

const ProjectCard = () => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]); // <-- correct initial state

  useEffect(() => {
    let mounted = true; // optional safeguard for unmounted component

    async function projectDetail() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/api/project/user/allProject`);

        // axios response body is in res.data
        if (res.status !== 200 || !res.data?.projects) {
          throw new Error("Projects have not been fetched");
        }

        // Merge arrays correctly (no nested arrays)
        if (mounted) {
          setProjectData((prev) => [...prev, ...res.data.projects]);
        }
      } catch (error) {
        console.log("Error fetching projects:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    projectDetail();

    return () => {
      mounted = false;
    };
  }, []);
  const deleteProject = async (projectId) => {
    try {
      await axiosInstance.delete(`/api/project/user/delete/${projectId}`);

      // remove project from UI
      setProjectData((prev) =>
        prev.filter((project) => project._id !== projectId),
      );
    } catch (error) {
      console.log("Delete failed:", error);
    }
  };

  return (
    <div>
      <ProjectCardStructure
        project={projectData}
        loading={loading}
        onDelete={deleteProject}
      />
    </div>
  );
};

export default ProjectCard;
