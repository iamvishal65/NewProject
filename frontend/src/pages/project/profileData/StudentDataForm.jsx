import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentDataSchema } from "./StudentDataSchema";
import { useForm } from "react-hook-form";

export default function StudentDataForm({ onSubmit,loading}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(StudentDataSchema),
    mode: "onChange",
  });

  return (
    <form
      className="flex  items-center justify-center  min-h-screen "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-2 box-border border border-black p-3 w-[400px] rounded-lg">
        <h2 className=" text-xl font-bold">Register</h2>
        <label className="flex flex-col">
          <span className="mb-1">First Name:</span>
          <input
            type="text"
            placeholder="first name"
            className=" border rounded-md border-black p-2 w-[250px] "
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Last Name:</span>
          <input
            type="text"
            placeholder="last name"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("lastName")}
          />
          </label>
        <label className="flex flex-col">
          <span className="mb-1">Enrollment Number:</span>
          <input
            type="text"
            placeholder="Enrollment number"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("enrollment_number")}
          />
          {errors.enrollment_number && (
            <p className="text-red-500">{errors.enrollment_number.message}</p>
          )}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Admission year:</span>
          <input
            type="number"
            min="2015"
            max="3000"
            placeholder="2015"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("admissionYear", { valueAsNumber: true })}
          />
        </label>
        <button
          type="submit"
          disabled={!isValid || loading}
          className={`${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } text-white py-2 rounded`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </form>
  );
}
