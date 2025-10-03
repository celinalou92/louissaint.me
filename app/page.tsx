import { SkillList } from "./components/List/SkillsList";
import { Projects } from "./components/Portfolio/Projects";
import projectData from "./data/projectsData";
import { Stack } from "@mui/material";
import { AboutMe } from "./components/Content/AboutMe";
import { skillsListData } from "./data/skillListData";

export default function Home() {
  const featuredProjects = projectData.filter((projectData) => {
    return projectData.featured === true;
  });

  return (
    <Stack spacing={5}>
      <AboutMe />
      
      <SkillList skillsListData={skillsListData} />
      <Projects projects={featuredProjects} />
    </Stack>
  );
}
