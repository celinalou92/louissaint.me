import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./components/ThemeRegistry/ThemeRegistry";
import { Grid } from "@mui/material";
import { VerticleHero } from "./components/Hero/VerticleHero";

export const metadata: Metadata = {
  title: "Louissaint Portfolio",
  description: "Celina Louissaint Web Developer Portfolio",
};

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body>
            <Grid container px={2}>
              <Grid item md={6} sm={12}
              >
                <VerticleHero />
              </Grid>
              <Grid
                item
                md={6}
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
