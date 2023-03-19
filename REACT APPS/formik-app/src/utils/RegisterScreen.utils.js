import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  userType: "",
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Too Short")
    .max(20, "Too Long")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Too Short")
    .max(20, "Too Long")
    .required("Required"),
  username: Yup.string()
    .min(3, "Too Short")
    .max(20, "Too Long")
    .matches(
      /^[a-zA-Z0-9_-]*$/,
      "Username can only contain letters, numbers, underscores, and dashes"
    )
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Too short (6 chars minimum)")
    .max(20, "Too long (20 chars maximum)")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Should be at least one uppercase and one number"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  userType: Yup.string()
    .oneOf(["buyer", "seller"], "Please select a user type")
    .required("Required"),
});
