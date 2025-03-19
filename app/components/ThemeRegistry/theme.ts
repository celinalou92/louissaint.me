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
      primary: "rgb(245, 242, 235)",
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #1C1C1D 0%, #232324 85%, #2A2A2B 98%, #302F35 100%)",
          minHeight: "100vh",
        },
      },
    },
  },
});


export default theme;
