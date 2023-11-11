/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/base';
import { AppBar, Toolbar, Grid, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/system';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Skills } from './components/skills/Skills';
import { Hero } from './components/hero/Hero';

export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Box
        maxWidth="100vw"
        pr= "2rem"
        pl= "2rem"
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <AppBar position="relative">
          <Toolbar >
            <Typography variant="h5" color="text.secondary" noWrap sx={{ letterSpacing: ".2rem" }}>
              Louissaint
            </Typography>
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon
                sx={{ color: "text.secondary" }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Hero/>
        <Skills cards={cards} />
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