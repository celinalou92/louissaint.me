import { Project } from "@/types/Project";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Divider, Box } from "@mui/material";

const getButtons = (project: Project) => {
    {
        return project.name != "Amanda Lynn Photography" ? (
            <>
                <Button
                    variant="outlined"
                    href={project.links[0]}
                    color="secondary"
                    target="_blank"
                    rel="noreferrer"
                >
                    See Repo
                </Button>
                <Button
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    href={project.links[1]}
                    color="secondary">
                    See Live Site
                </Button>
            </>
        ) : (
            <Button
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                href={project.links[0]}
                color="secondary"
            >
                See Demo on Vimeo
            </Button>
        )
    }
}

export const Projects = ({ projects }: { projects: Array<Project> }) => {

    return (
        <Box id="projects">
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
                <br />
                <br />
                <Grid container spacing={4} p={2}>
                    {projects.map((project: Project) => (
                        <Grid item key={project.name} xs={12} sm={6} md={4}>
                            <Card
                                variant="outlined"
                                sx={{ height: "100%", borderRadius: "15px", display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                        borderRadius: "15px 15px 0px 0px"
                                    }}
                                    // @ts-ignore
                                    image={project.image}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                    <br />
                                    <Typography>
                                        {project.description2}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{ justifyContent: "center" }}
                                >
                                    {getButtons(project)}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};