import { Merriweather } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import mangoWhite from "@/public/mango-matrix-white.png";


const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
       //gold
      main: '#D6A23A',
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      //peach
      main: "#FF7972"
    },
    info: {
      main: "#fff",
    },
    divider: "#1C1C1D",
    text: {
      primary: "#fff",
      //peach
      secondary: "#FF7972"
    },
    background: {
      //dark grey
      default: "#1C1C1D",
      paper: "rgba(58,58,61,0.28)",
    }
  },
  typography: {
    fontFamily: "merriweather",
  }
});


export default theme;
