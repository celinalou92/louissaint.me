/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import { AboutMe } from "../aboutMe/AboutMe";


export const Hero = () => {
    return (
        <Box
            sx={{
                pt: 8,
                pb: 6,
                pr: 5,
                pl: 4,
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

                <Typography variant="h5" align="left" color="#9290A3" paragraph
                    sx={{
                        textTransform: "uppercase",
                        letterSpacing: ".2rem",
                        textShadow: "1px 1px 1px rgba(199, 81, 81, 0.8)"
                    }}
                >
                    FULL-STACK WEB DEVELOPER
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