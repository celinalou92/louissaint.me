import { Box, Card, Typography } from "@mui/material";


export const AboutMe = () => {
    return (
        <Box
            sx={{
                width: "30vw",
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
                >
                My name is Celina Louissaint I am a Long Beach based developer and I build fully responsive websites for small businesses, projects and individuals. I have a wide skill set that includes graphic design, video editing, and coding (front end). I can build your site, design your logo and create graphics for your business from beginning to end.
            </Typography>
        </Box>
    )
};

