import Box from "@mui/material/Box";
import { SkillList } from "./components/skillList/SkillsList";
import { Projects } from "./components/Projects/Projects";
import projectData from "./data/projectsData";
import { Stack } from "@mui/material";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  const featuredProjects = projectData.filter((projectData) => {
    return projectData.featured === true;
  });

  return (
      <Stack 
      overflow={"scroll"} 
      alignContent={"center"}
      >
        <AboutMe />
        {/* <SkillList skillsListData={skillsListData} />  */}
        <Projects projects={featuredProjects} />
        {/* <Footer /> */}
      </Stack>
  );
}
