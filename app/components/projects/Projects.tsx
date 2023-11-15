import { Project } from "@/types/Project";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Divider, Box } from "@mui/material";
import Image from "next/image";

export const Projects = ( {projects }: {projects : Array<Project>, path: any} ) => {
    
    // const createImageSRC = (projectObj) = {
    //     return (<Image src={project.image} alt="me" width="64" height="64" />) 
    // };

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
                    {/* {projects.map((project: Project) => ( */}
                        <Grid item key={projects[0].name} xs={12} sm={6} md={4}>
                            <Card
                            variant="outlined"
                                sx={{ borderRadius: "15px", height: "35rem", display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image={"/projectImages/manage-it_screengrab.png"}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {projects[0].name}
                                    </Typography>
                                    <Typography>
                                        {projects[0].description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button  >{projects[0].links}</Button>
                                    <Button >{projects[0].links}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    {/* ))} */}
                </Grid>
            </Container>
        </Box>
    );
};