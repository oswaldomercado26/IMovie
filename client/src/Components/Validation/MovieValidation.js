import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  comment: yup
    .string()
    .required("Commentario es requerido")
    .max(1000, "Comentario solo tiene 1000 caracteres"),
  rating: yup.number().required("Select a rating"),
});

const movieValidation = yup.object().shape({
  name: yup
    .string()
    .required("Ingresa el titulo del streaming")
    .max(50, "Solo puede tener 50 caracteres"),
  time: yup.number().required("Ingresa la duracion"),
  language: yup.string().required("Ingresa el lenguaje"),
  year: yup.number().required("ingresa el año y la categoria"),
  category: yup.string().required("Selecciona la categoria"),
  desc: yup
    .string()
    .required("Porfavor ingresa tu sipnosis")
    .max(2000, "Sipnosis solo tiene que tener 2000 caracteres"),
});

export { ReviewValidation, movieValidation };
