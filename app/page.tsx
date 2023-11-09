/* eslint-disable react/no-unescaped-entities */
"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/base';
import { AppBar, Toolbar, Grid, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useTheme } from '@mui/system';
import theme from './components/ThemeRegistry/theme';

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
          <Typography variant="h5" color="text.secondary" noWrap sx={{letterSpacing: ".2rem"}}>
            Louissaint
          </Typography>
          <IconButton
            size="large"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon 
            sx={{color: "text.secondary"}}
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
            <Typography variant="h5" align="left" color="text.secondary"  paragraph>
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
        <Container sx={{ py: 8, bgcolor: 'background.paper' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  >View</Button>
                    <Button >Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="body1" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          // color="pallet.info.main"
          // component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
      </Box>
      </>
  )}