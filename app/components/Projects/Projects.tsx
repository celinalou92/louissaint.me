import { Project } from "@/types/Project";
import { Typography, Stack } from "@mui/material";
import StyledCard from "../StyledCard/StyledCard";
import { getButtons } from "../Buttons/Buttons";

export const Projects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <Stack
      id="projects"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Stack className="sectionContainer">
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }}
          variant="h3"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
        >
          Portfolio
        </Typography>
        <Stack
          paddingY={"10%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {projects.map((project: Project) => {
            const buttons = [getButtons(project)]; // Wrap buttons in an array
            return (
              <Stack key={project.name} sx={{ marginBottom: "40%" }}>
                <StyledCard
                  contentHeader={project.name}
                  contentText={[
                    project.description ?? "",
                    project.description2 ?? "",
                  ]}
                  cardMedia={`${project.image}`}
                  buttons={buttons}
                />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};
