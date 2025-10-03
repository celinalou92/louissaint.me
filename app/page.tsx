import { SkillList } from "./components/skillList/SkillsList";
import { Projects } from "./components/projects/Projects";
import projectData from "./data/projectsData";
import { Stack } from "@mui/material";
import { AboutMe } from "./components/aboutMe/AboutMe";
import ServicesPage from "./components/services/ServicesPage";
import ProjectsPage from "./components/projects/Projects_temp"
import { skillsListData } from "./data/skillListData";

export default function Home() {
  const featuredProjects = projectData.filter((projectData) => {
    return projectData.featured === true;
  });

  return (
    <Stack spacing={5}>
      <ServicesPage/>
      <SkillList skillsListData={skillsListData} />
      <ProjectsPage/>
      {/* <AboutMe /> */}
      <Projects projects={featuredProjects} />
    </Stack>
  );
}
