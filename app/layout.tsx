import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./components/ThemeRegistry/ThemeRegistry";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Grid, Stack, Toolbar } from "@mui/material";
import { Hero } from "./components/Hero/Hero";
import { url } from "inspector";

export const metadata: Metadata = {
  title: "Louissaint Portfolio",
  description: "C Louissaint Portfolio",
};

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body>
            <Grid container px={15}>
              <Grid item md={5} sm={12}
              >
                <Hero />
              </Grid>
              <Grid
                item
                md={7}
                sm={12}
                sx={{
                  height:"100vh",
                  pt: 20,
                  pb: 6,
                  pl: 4,
                  pr: 4
                }}
                alignContent={"center"}
              >
                {children}
              </Grid>
            </Grid>
        </body>
      </ThemeRegistry>
    </html>
  );
}
