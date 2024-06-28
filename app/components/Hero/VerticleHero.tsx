"use client";
import { Typography, Stack } from "@mui/material";
import { NavBar } from "../Nav/VerticleNav";
import { Contact } from "../Contact/Contact";

export const VerticleHero = () => {
  return (
    <Stack
      maxWidth={"522px"}
      position={"fixed"}
      sx={{
        left: "168px",
        top: "229px",
      }}
    >
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          letterSpacing: ".2rem",
          borderBottom: ".5px solid #D6A23A",
          paddingY: "2%",
        }}
        gutterBottom
      >
        Hi I'm Celina
      </Typography>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{ letterSpacing: ".2rem", paddingY: "2%" }}
        gutterBottom
      >
        Web Developer
      </Typography>
      <Typography
        align="left"
        variant="h6"
        paragraph
        sx={{
          height: "100%",
        }}
      >
        I am a Long Beach based Web Developer with a passion for learning new
        and emerging technologies.
      </Typography>
      <Stack
        sx={{
          paddingLeft: "15%",
        }}
      >
        <NavBar />
        <Contact />
      </Stack>
    </Stack>
  );
};
