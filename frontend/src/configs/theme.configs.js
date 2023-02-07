import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
//crear datos para los temas 
export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: { // modo oscuro
        main: "#0AC79B",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#66FFFF",
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#131313"
      }
    } : {
      primary: { // Color modo dia
        main: "#0AC79B"
      },
      secondary: {
        main: "#20603d"
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;
