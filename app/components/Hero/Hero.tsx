"use client";
import { Typography, Stack, useMediaQuery } from "@mui/material";
import { NavBar } from "../Nav/Nav";
import { Contact } from "../Contact/Contact";

export const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <Stack
      className="hero"
      maxWidth={"522px"}
      position={"fixed"}
      sx={(theme) => ({
        left: "168px",
        top: "229px",
        [theme.breakpoints.down("md")]: {
          position: "relative",
          justifyContent: "center",
          flexDirection: "column-reverse",
          top: "15vh",
          left: "0",
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
      <Stack
        sx={(theme) => ({
          paddingLeft: "15%",
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "unset",
            borderBottom: ".5px solid #fff",
            position: "fixed",
            top: "1vh",
            left: "0",
            width: "100vw",
          },
        })}
      >
        <NavBar matches={matches}/>
      </Stack>
    </Stack>
  );
};
