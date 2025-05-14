"use client";
import { Typography, Stack, useMediaQuery } from "@mui/material";
import { NavBar } from "../Nav/Nav";
import { Contact } from "../Contact/Contact";

export const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Stack
      paddingBottom={isMobile ? 8 : 1}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
          flexDirection: "column-reverse",
          textAlign: "center"
        },
      })}
    >
      {isMobile && <Contact />}
      <Stack spacing={isMobile ? 3 : 2} 
        paddingBottom={isMobile ? "1rem" : "2rem"} 
      >
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            letterSpacing: ".2rem",
            borderBottom: ".5px solid #D6A23A",
            paddingY: isMobile ? "1rem" : "2%",
          }}
          gutterBottom={!isMobile}
        >
          Hi I&apos;m Celina
        </Typography>
        <Typography
          variant= "h5"
          color="text.primary"
          sx={{ 
            letterSpacing: ".2rem", 
            paddingY: isMobile ? "0.5rem" : "2%" 
          }}
          gutterBottom={!isMobile}
        >
          Full Stack Developer
        </Typography>
        <Typography
          variant="body1"
          paragraph={!isMobile}
          sx={{
            height: "100%",
            letterSpacing: ".1rem",
            marginBottom: isMobile ? 1 : undefined,
          }}
        >
          California-based developer passionate about building, learning, and eating Mexican food.
        </Typography>
      </Stack>
      <NavBar />
    </Stack>
  );
};