import { Merriweather } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#FF7972",
    },
    secondary: {
      main: "#D6A23A",
    },
    info: {
        main: "#fff"
    },
    divider: "#D6A23A",
    background: {
        paper: "#1C1C1D",
    }
  },
});

theme = createTheme(theme,{
  typography: {
    fontFamily: merriweather.style.fontFamily,
    // color: theme.palette.primary.main,
    variant: {
        h1: {
            color: theme.palette.primary.main
        },
        h2: {
            color: theme.palette.primary.main
        },
        h3: {
            color: theme.palette.primary.main
        },
        h5: {
            color: theme.palette.primary.main
        },
        h6: {
            color: theme.palette.primary.main
        },
        body1: {
            color: theme.palette.info.main
        },
    }
  },
  background: {
    paper: theme.palette.secondary.main
  }
});

export default theme;
