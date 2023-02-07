import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";
//crear formulario de registro
const AddStreaming = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const addStreaming = useFormik({
    initialValues: {
      title: "",
      resume: "",
      image: "",
      url: "",
      platform: [5],
      category: [3],
      cast: [5]
      


    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Titulo es requerido"),
      resume: Yup.string()
        .required("Sinopsis es requerido"),
      url: Yup.string()
        .required("URL es requerido")
      
    }),
    //sincronizar los valores y verificar que se envian
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      console.log("asdasdasdasd");
      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);
//si es correcto mostrar mensaje
      if (response) {
        addStreaming.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Add Streaming completado");
      }

      if (err) setErrorMessage(err.message);
    }
  });

  return (
    <Box component="form" onSubmit={addStreaming.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="Titulo"
          name="title"
          fullWidth
          value={addStreaming.values.title}
          onChange={addStreaming.handleChange}
          color="success"
          error={addStreaming.touched.title && addStreaming.errors.title !== undefined}
          helperText={addStreaming.touched.title && addStreaming.errors.title}
        />
        <TextField
          type="text"
          placeholder="Sinopsis"
          name="resume"
          fullWidth
          value={addStreaming.values.resume}
          onChange={addStreaming.handleChange}
          color="success"
          error={addStreaming.touched.resume && addStreaming.errors.resume !== undefined}
          helperText={addStreaming.touched.resume && addStreaming.errors.resume}
        />
        <TextField
          type="text"
          placeholder="URL"
          name="url"
          fullWidth
          value={addStreaming.values.url}
          onChange={addStreaming.handleChange}
          color="success"
          error={addStreaming.touched.url && addStreaming.errors.url !== undefined}
          helperText={addStreaming.touched.url && addStreaming.errors.url}
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        Add Streaming
      </LoadingButton>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default AddStreaming;