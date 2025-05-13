import { Stack, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Stack
      id="about"
      height={{sm: "60vh", md:"100vh"}}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      className="sectionContainer"
    >
      <Stack>
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }}
          variant="h4"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
        >
          About Me
        </Typography>
        <Typography
          sx={{ letterSpacing: ".06rem" }}
          padding="2rem 1.7rem"
          fontSize={"1rem"}
          textAlign="justify"
          paddingY={"10%"}
        >
          I have three years of experience building web applications for startups, enterprise clients, and local businesses. I’ve worked on everything from e-commerce platforms to generative AI apps using <strong>React</strong>, <strong>Next.js</strong>, <strong>Java/Spring Boot</strong>, and <strong>TypeScript</strong>.
          Lately, I have been sharpening my backend development skills, adding <strong>Python</strong> to my toolkit and working on data processing, API integrations, and service-oriented architecture. I enjoy building full-stack systems that are scalable, reliable, and grounded in solving practical business problems.
        </Typography>
      </Stack>
    </Stack>
  );
};
