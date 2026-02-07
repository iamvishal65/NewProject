import React from "react";
import { useForm } from "react-hook-form";

const DataProjectStructure = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();

  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold text-center">Simple Form</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("projectName")}
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("description")}
        />

        <input
          type="text"
          placeholder="Repo Link"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("repoLink")}
        />

        <input
          type="text"
          placeholder="Image Link"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("imageLink")}
        />

        <input
          type="text"
          placeholder="Deployed Link"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("deployLink")}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataProjectStructure;

