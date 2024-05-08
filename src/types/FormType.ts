import { z, ZodType } from "zod";
import { UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;

  valueAsNumber?: boolean;
};

export type ValidFieldNames = "email" | "password";

export const UserSchema: ZodType<FormData> = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
