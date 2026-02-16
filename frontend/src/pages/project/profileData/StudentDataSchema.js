import { z } from "zod";
export const StudentDataSchema = z
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
      enrollment_number: z
      .string()
      .min(1, "Enrollment number is required")
      .regex(
        /^[A-Z]{3}[0-9]{8}$/,
        "Invalid enrollment number format (e.g., ABC12345678)"
      )
      .transform((val) => val.toUpperCase()),

    admissionYear: z
      .number()
      .min(2015, "Admission year must be after 2015")
      .max(new Date().getFullYear(), "Admission year cannot be in the future"),
  })