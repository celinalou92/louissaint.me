import { SkillList } from "./components/List/SkillsList";
import { Projects } from "./components/Portfolio/Projects";
import projectData from "./data/projectsData";
import { Stack } from "@mui/material";
import { skillsListData } from "./data/skillListData";
import ServicesPage from "./components/services/ServicesPage";
import ProjectsPage from "./components/Portfolio/Projects_temp"


export default function Home() {
  const featuredProjects = projectData.filter((projectData) => {
    return projectData.featured === true;
  });

  return (
    <Stack spacing={1}>
      <ServicesPage/>
      <SkillList skillsListData={skillsListData} />
      <ProjectsPage/>
      {/* <Projects projects={featuredProjects} /> */}
    </Stack>
  );
}
