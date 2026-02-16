const { z } = require("zod");

const mentorregisterSchema = z.object({
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
  
  designation: z
    .string()
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});



module.exports={ mentorregisterSchema}