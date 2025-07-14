import * as Yup from "yup";

export const Schema = Yup.object().shape({
  email: Yup.string().required("Email is Required"),
  password: Yup.string().required("Password is Requried"),
});
