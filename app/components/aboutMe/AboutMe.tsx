import { Box, Typography } from "@mui/material";


export const AboutMe = () => {
    return (
        <Box
            sx={{
                width: "80vw",
                my: 10,
                mx: 20,
                py: 12,
                px: 8,
                boxShadow: 3,
                border: 1,
                borderColor: 'divder.main',
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

