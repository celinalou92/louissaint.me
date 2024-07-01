import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./components/ThemeRegistry/ThemeRegistry";
import { Grid } from "@mui/material";
import { Hero } from "./components/Hero/Hero";

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
            <Grid
              item
              md={6}
              sm={12}
              className="mobileLayout"
            >
              <Hero />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              className="mobileLayout"
            >
              {children}
            </Grid>
          </Grid>
        </body>
      </ThemeRegistry>
    </html>
  );
}
