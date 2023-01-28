import { Box, Typography, CircularProgress } from "@mui/material";
//Los indicadores de progreso, comúnmente conocidos como spinners, expresan un tiempo de espera no especificado o muestran la duración de un proceso.
//funciona para ver el rating de me gusta
const CircularRate = ({ value }) => {
  return (
    <Box sx={{
      position: "relative",
      display: "inline-block",
      width: "max-content"
    }}>
      {/* determinar el valor de 0-10 de que esta lleno */}
      <CircularProgress variant="determinate" value={value * 10} color="success" size={50} />
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Typography
          variant="caption"
          component="div"
          fontWeight="700"
          sx={{ marginTop: "-5px" }}
        >
          {Math.floor(value * 10) / 10}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularRate;