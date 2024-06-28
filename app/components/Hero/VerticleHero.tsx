"use client";
import { Typography, Stack} from "@mui/material";
import { NavBar } from "../Nav/VerticleNav";
import { Contact } from "../Contact/Contact";

export const VerticleHero = () => {
  return (
    <Stack
      width={"45vw"}
      position={"fixed"}
      sx={{
        margin: "25% 5%"
      }}
    >
      <Typography
        variant="h2"
        color="text.primary"
        sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }}
        
      >
        Hi I'm Celina
      </Typography>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ letterSpacing: ".2rem"}}
        gutterBottom
      >
        Web Developer
      </Typography>
      <Typography
        align="left"
        variant="body1"
        paragraph
        sx={{
          height: "100%",
        }}
      >
        I am a Long Beach based Web Developer with a passion for learning new and emerging technologies.
      </Typography>
      <NavBar />
      <Contact/>
    </Stack>
  );
};
