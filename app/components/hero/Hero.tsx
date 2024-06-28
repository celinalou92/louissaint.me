"use client";
import { Typography, Stack} from "@mui/material";
import { NavBar } from "../NavBar/Navbar";
import { Footer } from "../Footer/Footer";

export const Hero = () => {
  return (
    <Stack
      width={"35vw"}
      position={"fixed"}
      sx={{
        pt: 20,
        pb: 6,
        pl: 4,
      }}
    >
      <Typography
        variant="h2"
        color="text.primary"
        sx={{ letterSpacing: ".2rem", borderBottom: "1px solid #D6A23A" }}
        gutterBottom
      >
        Hi I'm Celina
      </Typography>
      <Typography
        align="left"
        variant="body1"
        paragraph
        sx={{
          height: "100%",
        }}
      >
        I am a Long Beach based Web Developer with a passion for learning new
        and emerging technologies.
      </Typography>
      <NavBar />
      <Footer/>
    </Stack>
  );
};
