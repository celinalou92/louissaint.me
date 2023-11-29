import { Merriweather } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#1C1C1D',
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#FF7972",
    },
    info: {
      main: "#fff",
    },
    divider: "#D6A23A",
    text: {
      primary: "#fff",
      secondary: "#FF7972",
      disabled: "#FF7972",
    },
    background: {
      default: "#1C1C1D",
      paper: "rgba(58,58,61,0.28)",
    }
  },
  typography: {
    fontFamily: "merriweather",
  }
});


export default theme;
