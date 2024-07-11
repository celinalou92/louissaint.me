"use client";
import { Typography, Stack, useMediaQuery } from "@mui/material";
import { NavBar } from "../Nav/Nav";
import { Contact } from "../Contact/Contact";

export const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
          flexDirection: "column-reverse",
          textAlign: "center",
        },
      })}
    >
      {matches && <Contact />}
      <Stack>
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
          Hi I&apos;m Celina
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
          variant="h6"
          paragraph
          sx={{
            height: "100%",
          }}
        >
          I am a Long Beach based Web Developer with a passion for web design
          and development, learning new technologies and Mexican food.
        </Typography>
      </Stack>
      <NavBar matches={matches} />
    </Stack>
  );
};
