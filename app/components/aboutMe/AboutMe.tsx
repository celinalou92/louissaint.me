import { Box, Card, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Box
      id="about"
    >
      <Typography sx={{ letterSpacing: ".2rem", borderBottom: "1px solid #D6A23A" }}variant="h3" lineHeight="1.6" gutterBottom textAlign="center">
        About Me
      </Typography>
      <Typography variant="body1" lineHeight="1.6" gutterBottom textAlign="center">
      My experience includes building a web based e-commerce app for an enterprise businesses,  a Gen-AI pilot for a start up and several websites for local businesses.  
      I specializing in Front-End Development with React, I have recently worked with with Next.js, Typescript, and Java/Spring Boot. I am dedicated to ensuring efficient and collaborative project execution through agile methodologies.
      </Typography>
    </Box>
  );
};
