import { Typography, useTheme } from '@mui/material';
import { AiTwotoneHeart} from "react-icons/ai";

const Logo = () => {
  const theme = useTheme();
//retorna la imagen o letras de nuestro logo
  return (
    //typography es para darle formato a las letras
    <Typography fontWeight="700" fontSize="1.7rem">
      I <AiTwotoneHeart /><span style={{ color: theme.palette.success.light}}>Streaming</span>
    </Typography>
  );
};

export default Logo;
