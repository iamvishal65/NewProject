import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from '../../schema/RegisterForm';
import { useForm } from "react-hook-form";

export default function RegisterForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange", // real-time validation
  });


  return (
    <form className="flex  items-center justify-center  min-h-screen "  onSubmit={handleSubmit(onSubmit)}>
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
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Last Name:</span>
          <input
            type="text"
            placeholder="last name"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("lastName")}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Email:</span>
          <input
            type="email"
            placeholder="email"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Password:</span>
          <input
            type="password"
            placeholder="password"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Confirm Password:</span>
          <input
            type="password"
            placeholder="password"
            className="border rounded-md border-black p-2 w-[250px]"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Enrollment Number:</span>
          <input
            type="text"
            placeholder="Enrollment number"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("enrollmentNumber")}
          />
          {errors.enrollmentNumber && <p className="text-red-500">{errors.enrollmentNumber.message}</p>}
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Admission year:</span>
          <input
            type="number"
            min="2015"
            max="3000"
            placeholder="2015"
            className="border rounded-md border-black p-2 w-[250px]"
            {...register("admissionYear",{ valueAsNumber: true })}
          />

        </label>
        <button
          type="submit"
          disabled={!isValid}
          className={`${
            isValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white py-2 rounded`}
        >
          Register
        </button>
      </div>
    </form>
  );
}
