import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./components/ThemeRegistry/ThemeRegistry";
import { Stack } from "@mui/material";
import { Hero } from "./components/Hero/Hero";

export const metadata: Metadata = {
  title: "Louissaint Portfolio",
  description: "Celina Louissaint Full Stack Developer Portfolio",
};

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body className="outer">
          <Stack id="home" className="asideContainer">
            <Hero />
          </Stack>
          <Stack paddingBottom={"12rem"}>{children}</Stack>
        </body>
      </ThemeRegistry>
    </html>
  );
}
