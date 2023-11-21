/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography, Stack, Divider, Grid } from "@mui/material";
import { AboutMe } from "../aboutMe/AboutMe";


export const Hero = () => {

    const mobile = { xs: 12, sm: 6, md: 4 };
    const desktop = { sm: 6, md: 12 };

    return (
        <Grid
        alignItems="center"
        justifyContent="center"
            container
            columnGap={8}
            sx={{
                pt: 8,
                pb: 6,
                pr: 5,
                pl: 4,
            }}
        >
            <Grid item

            >
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
            </Grid>
            <Grid
                item

            >
                <AboutMe />
            </Grid>
        </Grid>

    );
};