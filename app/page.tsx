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

export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Box
        maxWidth="100vw"
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
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h1"
              align="center"
              color="text.primary"
              gutterBottom

            >
              Hi I'm Celina
            </Typography>
            <Typography variant="h5" align="left" color="text.secondary" paragraph>
              FRONT-END WEB DEVELOPER
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button >Main call to action</Button>
              <Button >Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* About Me */}
        <AboutMe />
        {/* End About Me */}

          {/* End hero unit */}
          {/*Skills Section*/}
          <Skills cards={cards}/>
          {/*End Skills Section*/}
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