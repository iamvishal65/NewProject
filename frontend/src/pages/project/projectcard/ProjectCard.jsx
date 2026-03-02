import React, { useEffect, useState } from "react";
import ProjectCardStructure from "./ProjectCardStructure";
import axiosInstance from "../../../api/authApi";

const ProjectCard = ({ path, allowDelete = false }) => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    let mounted = true;

    async function projectDetail() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(path);
        if (res.status !== 200 || !res.data?.projects) {
          throw new Error("Projects have not been fetched");
        }

        if (mounted) {
          setProjectData(res.data.projects);
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
  }, [path]);
  const deleteProject = async (projectId) => {
    try {
      await axiosInstance.delete(`/api/project/user/delete/${projectId}`);

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
        onDelete={allowDelete ? deleteProject : null}
        allowDelete={allowDelete}
      />
    </div>
  );
};

export default ProjectCard;
