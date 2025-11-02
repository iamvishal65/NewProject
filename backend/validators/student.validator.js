const { z } = require("zod");

const registerSchema = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .max(50)
    .describe("invalid text"),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .max(50)
    .describe("invalid text"),
  email: z.string().email().max(50).describe("valid email required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must be at most 30 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
  enrollment_number: z
    .string()
    .regex(/^[A-Z]{3}[0-9]{8}$/, "invalid enrollment number format")
    .transform((val) => val.toUpperCase()),
  admissionYear: z
    .number()
    .min(2000)
    .max(new Date().getFullYear(), "Admission year cannot be in the future"),
});

const loginSchema = z.object({
  identifier: z
    .string()
    .min(3, "Identifier required")
    .refine(
      (val) => {
        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const enrollmentRegex = /^[A-Z]{3}[0-9]{8}$/;
        return emailRegx.test(val) || enrollmentRegex.test(val);
      },
      { message: "Must be a valid email or enrollment number" }
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must be at most 30 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});


module.exports = { registerSchema, loginSchema};
