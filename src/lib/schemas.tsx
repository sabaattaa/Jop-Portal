import * as Yup from "yup";
// Sign up schema
export const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 charachters").required("Password is required").matches(/[A-Z]/, "Password must contain at least one uppercase letter"),

})

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&#]/, "Must contain at least one special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});