import * as Yup from "yup";

export const initialValues = { email: "", password: "" };

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Too short (6 chars minimum)")
    .max(20, "Too long (20 chars maximum)")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Should be at least one uppercase and one number"
    )
    .required("Password is required"),
});
