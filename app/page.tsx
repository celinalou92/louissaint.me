import Box from '@mui/material/Box';
import { SkillList } from './components/skillList/SkillsList';
import { Hero } from './components/hero/Hero';
import { Projects } from './components/projects/Projects';
import projectData from "./data/projectsData"
import { skillsListData } from '@/app/data/skillListData';



export default function Home() {

const featuredProjects = projectData.filter((projectData) => {
  return projectData.featured === true;
});

  return (
    <>
      <Box
        maxWidth="100vw"
        pr="2rem"
        pl="2rem"
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Hero />
        <SkillList skillsListData={skillsListData} />
        <Projects projects={featuredProjects} />
      </Box>
    </>
  )
}