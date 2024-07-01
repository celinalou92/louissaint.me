import { Container, Stack, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Stack
      id="about"
      height="100vh"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
      maxWidth={"500px"}
      maxHeight={"500px"}
      >
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }}
          variant="h3"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
          paddingY={"4%"}
        >
          About Me
        </Typography>
        <Typography
          padding="2rem 1.7rem"
          variant="h6"
          lineHeight="1.6"
          textAlign="center"
          paddingY={"10%"}
        >
         My experience includes building a web based e-commerce application for an enterprise business, a generative AI pilot application for a start up and several websites for local businesses. I specialize in Front-End Development with React, I have recently worked with Next.js, Typescript, and Java/Spring Boot. I am dedicated to ensuring efficient and collaborative project execution through agile methodologies.
        </Typography>
      </Stack>
    </Stack>
  );
};
