import { Link } from "react-router-dom";
import ProjectCard from "../projectcard/ProjectCard";

export default function MyProjects({ handleClick }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        + Add project
      </button>
    </div> 
  );
}
