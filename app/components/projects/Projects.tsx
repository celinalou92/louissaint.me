import { Project } from "@/types/Project";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Divider,
  Box,
} from "@mui/material";
import StyledCard from "../StyledCard";

export const Projects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <Box id="projects">
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Typography sx={{ letterSpacing: ".2rem", borderBottom: "1px solid #D6A23A" }} variant="h3" align="left" color="text.primary" mb=".5rem">
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
