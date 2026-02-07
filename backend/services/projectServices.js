const { projectCard } = require("../models/projectCard");

async function createNewProject(
  projectName,
  description,
  repoLink,
  imageLink,
  deployLink,
  userId
) {
  const existing = await projectCard.findOne({
    projectName,
    createdBy: userId,
  });
  
  if (existing) throw new Error("project name already registered");
  const newProject = await projectCard.create({
    projectName,
    description,
    repoLink,
    imageLink,
    deployLink,
    createdBy:userId,
  });
  return newProject;
}

async function projectAccessById(userId, projectId) {
  const project = await projectCard.findById({ _id: projectId, createdBy: userId });
  if (!project) throw new Error("project not existed in db");
  return project;
}

async function allProject(userId) {
  const allProject= await projectCard.find({ createdBy: userId }).sort({ createdAt: -1 });
  return allProject;
}

async function deleteProjectById(userId, projectId) {

const project = await projectCard.findOneAndDelete({
    _id: projectId,
    createdBy: userId,
  });
  if (!project) throw new Error("project not existed in db");
  return project;
}

module.exports = {
  createNewProject,
  projectAccessById,
  allProject,
  deleteProjectById,
};
