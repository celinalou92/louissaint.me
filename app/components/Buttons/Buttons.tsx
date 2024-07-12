import { Project } from "@/types/Project";
import { Button } from "@mui/material";

export const getButtons = (project: Project) => {
  {
    return project.name != "Amanda Lynn Photography" ? (
      <>
        <Button
          variant="outlined"
          href={project.links[0]}
          color="secondary"
          target="_blank"
          rel="noreferrer"
          sx={{
            padding: ".5rem 1rem",
            fontSize: ".75rem",
          }}
        >
          See Github
        </Button>
        <Button
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          sx={{
            padding: ".5rem 1rem",
            fontSize: ".75rem",
          }}
          href={project.links[1]}
          color="secondary"
        >
          See Live Site
        </Button>
      </>
    ) : (
      <Button
        target="_blank"
        rel="noreferrer"
        variant="outlined"
        href={project.links[0]}
        color="secondary"
        sx={{
          padding: ".5rem 1rem",
        }}
      >
        See Demo on Vimeo
      </Button>
    );
  }
};
