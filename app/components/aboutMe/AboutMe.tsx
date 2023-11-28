import { Box, Card, Typography } from "@mui/material";


export const AboutMe = () => {
    return (
        <Box
            sx={{
                width: "auto",
                py: 12,
                px: 10,
                boxShadow: 3,
                border: 1,
                borderColor: 'secondary.main',
                borderRadius: 2
            }}
        >
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                >
                About me
            </Typography>
            <Typography
                align="center"
                lineHeight="1.6"
                >
                My name is Celina Louissaint I am a Long Beach based developer with a passion for learning new and emerging technologies. Specializing in Front-End Development with React, I have experience working with Next.js, Typescript, and Java/Spring Boot. My approach is guided by agile delivery practices such as practicing pairing, test driven development, and striving for the smallest possible feedback loop with stakeholders.
            </Typography>
        </Box>
    )
};

