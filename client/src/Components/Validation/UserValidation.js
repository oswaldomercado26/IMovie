import * as yup from "yup";

// login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required("Email es requerido").trim(),
  password: yup
    .string()
    .required("Contraseña es requerido")
    .min(6, "Contraseña minimo 6 caracteres")
    .max(20, "Contraseña maximo 20 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña no tiene coincidencias"),
});

// register validation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required("Email es requerido").trim(),
  password: yup
    .string()
    .required("Contraseña es requerido")
    .min(6, "Contraseña minimo 6 caracteres")
    .max(20, "Contraseña maximo 20 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña no tiene coincidencias"),
  fullName: yup
    .string()
    .required("NombreCompleto es requerido")
    .max(50, "NombreCompleto maximo 50 caracteres")
    .matches(/^[a-zA-Z ]*$/, "NombreCompleto no tienen similitud"),
});

const ProfileValidation = yup.object().shape({
  fullName: yup
    .string()
    .required("Nombre Completo es requerido")
    .max(50, "Nombre Completo maximo 50 caracteres")
    .matches(/^[a-zA-Z ]*$/, "Nombre Completo no tienen similitud"),
  email: yup.string().email().required("Email es requerido").trim(),
});

const PasswordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Contraseña es requerido")
    .min(6, "Contraseña minimo 6 caracteres")
    .max(20, "Contraseña maximo 20 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña no tiene coincidencias"),
  newPassword: yup
    .string()
    .required("Contraseña es requerido")
    .min(6, "Contraseña minimo 6 caracteres")
    .max(20, "Contraseña maximo 20 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña no tiene coincidencias"),
  confirmPassword: yup
    .string()
    .required("Contraseña es requerido")
    .min(6, "Contraseña minimo 6 caracteres")
    .max(20, "Contraseña maximo 20 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña no tiene coincidencias")
    .oneOf([yup.ref("newPassword"), null], "Contraseñas no son iguales"),
});

export {
  LoginValidation,
  RegisterValidation,
  ProfileValidation,
  PasswordValidation,
};
