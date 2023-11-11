import { Project } from "@/types/Project";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Divider, Box } from "@mui/material";


export const Projects = ( {projects=[] }: {projects : Array<Project>} ) => {
    console.log("test",projects)

    return (
        <Box>
            <Container sx={{ py: 8 }} maxWidth="xl">
                <Typography
                    variant="h3"
                    align="left"
                    color="text.primary"
                    mb=".5rem"
                >
                    Projects
                </Typography>
                <Divider
                />
                <br/>
                <br/>            
                <Grid container spacing={4}>
                    {projects.map((project: Project) => (
                        <Grid item key={project.name} xs={12} sm={6} md={4}>
                            <Card
                            variant="outlined"
                                sx={{ borderRadius: "15px", height: "35rem", display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image="https://source.unsplash.com/random?wallpapers"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button  >{project.links}</Button>
                                    <Button >{project.links}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};