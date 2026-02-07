import React from "react";

const MyProjectStructure = ({ handleClick }) => {
  return (
    <section className="mt-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
          <p className="text-sm text-gray-500">View and manage projects connected to your account.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Connect Github
          </button>

          <a
            href="/repos"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            View Repos
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProjectStructure;
