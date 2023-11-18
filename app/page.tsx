/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import { SkillList } from './components/skillList/SkillsList';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/navBar/Navbar';
import { Projects } from './components/projects/Projects';
import projectData from "../data/projectsData"
import { skillsListData } from '@/data/skillListData';
import { Footer } from './components/footer/Footer';



export default function Home() {
  return (
    <>
      <NavBar />
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
        <Projects projects={projectData} />
      </Box>
      <Footer />
    </>
  )
}