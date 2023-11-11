/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Skills } from './components/skills/Skills';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/navBar/Navbar';
import { Projects } from './components/projects/Projects';
import projectData from "../data/projectsData"

export default function Home() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
    <NavBar/>
      <Box
        maxWidth="100vw"
        pr= "2rem"
        pl= "2rem"
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Hero/>
        {/* <Skills cards={cards} /> */}
        <Projects projects={projectData}/>
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