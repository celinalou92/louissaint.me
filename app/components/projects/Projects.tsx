import { Project } from "@/types/Project";
import {
  Typography,
  Container,
  Divider,
  Box,
} from "@mui/material";
import StyledCard from "../StyledCard";

export const Projects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <Box id="projects">
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Typography sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }} variant="h4" align="center" color="text.primary" mb=".5rem">
          Portfolio
        </Typography>
        <Divider />
        <br />
        {projects.map((project: Project) => (
            <>
            <StyledCard
            key={project.name}
            contentHeader={project.name}
            contentText={project.description}
            cardMedia={project.image}
            />
            <br />
            </>
        ))}
      </Container>
    </Box>
  );
};
