import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name too long")
      .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),

    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name too long")
      .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .max(50, "Email too long"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password must be at most 30 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[@$!%*?&]/, "Must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    enrollment_number: z
      .string()
      .min(1, "Enrollment number is required")
      .regex(
        /^[A-Z]{3}[0-9]{8}$/,
        "Invalid enrollment number format (e.g., ABC12345678)"
      )
      .transform((val) => val.toUpperCase()),

    admissionYear: z
      .string()
      .regex(/^\d{4}$/, "Admission year must be a 4-digit number")
      .refine(
        (val) => {
          const year = parseInt(val);
          const currentYear = new Date().getFullYear();
          return year >= 2015 && year <= currentYear;
        },
        { message: "Admission year must be between 2000 and the current year" }
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
  });
