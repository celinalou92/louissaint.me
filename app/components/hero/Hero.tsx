import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import { AboutMe } from "../aboutMe/AboutMe";


export const Hero = () => {
    return (
        <Box
            sx={{
                pt: 8,
                pb: 6,
                height: "80vh",
                display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"
            }}
        >
            <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                <Typography
                    variant="h1"
                    align="left"
                    color="text.primary"
                    gutterBottom

                >
                    Hi I'm Celina
                    <Divider />
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
                </Stack>
            </Container>
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <AboutMe />
            </Container>
        </Box>
    );
};