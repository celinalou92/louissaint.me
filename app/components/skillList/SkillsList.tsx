import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Divider, Box } from "@mui/material";
import Skill from "@/types/Skill";


export const SkillList = ({ dev, adobe } : {dev: Skill[], adobe: Skill[]}) => {
    return (
        <Box>
            <Container sx={{ py: 8 }} maxWidth="xl">
                <Typography
                    variant="h3"
                    align="left"
                    color="text.primary"
                    mb=".5rem"
                >
                    My Skill Set
                </Typography>
                <Divider
                />
                <br/>
                <br/>            
                <Grid container spacing={4}>
                    {dev.map((d: any) => (
                        <Grid item key={d.name} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
        </Box>
    );
};