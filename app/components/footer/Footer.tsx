import { Box, Button, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export const Footer = () => {
    const contactData = [
        {
            method: "Email",
            linkText: "celinalouissaint@gmail.com",
            link: "https://celinalouissaint@gmail.com",
            icon: <MailOutlineIcon />,
        },
        {
            method: "Github",
            linkText: "github.com/celinalou92",
            link: "https://github.com/celinalou92",
            icon: <GitHubIcon />,
        },
        {
            method: "LinkedIn",
            linkText: "linkedin.com/in/louissaint-c",
            link: "https://linkedin.com/in/louissaint-c",
            icon: <LinkedInIcon />,
        },
    ]
    return (
        <Box id="footer" sx={{ bgcolor: 'background.default', p: 8 }} component="footer">
            <Typography variant="h5" margin="1em auto">
                Contact Celina
            </Typography>
            <Stack width="100%">
                {contactData.map((contact) => (
                    <Box key={contact.method} sx={{ display: "flex", flexDirection: "row" }}>
                        <Button
                            href={contact.link}
                            target="_blank"
                            color="secondary"
                            startIcon={contact.icon}
                            size="large"
                            sx={{ display: "flex", flexDirection: "row" }}
                        >
                            {contact.method}:
                        </Button>
                        <Button
                            href={contact.link}
                            target="_blank"
                            color="info"
                        >
                            {contact.linkText}
                        </Button>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};      
