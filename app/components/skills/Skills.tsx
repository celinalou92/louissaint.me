import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from "@mui/material";


export const Skills = ({ cards }: { cards?: Array<Number> }) => {

    return (
        <>
            <Container sx={{ py: 8, bgcolor: 'background.paper' }} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card: Number) => (
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
        </>
    );
};