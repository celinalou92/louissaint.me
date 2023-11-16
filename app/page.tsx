/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SkillList } from './components/skillList/SkillsList';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/navBar/Navbar';
import { Projects } from './components/projects/Projects';
import projectData from "../data/projectsData"
import { skillsListData } from '@/data/skillListData';



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
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="body1" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Box>
        {/* End footer */}
      </Box>
    </>
  )
}