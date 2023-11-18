import { Box, Button, Stack, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export const Footer = () => {
    const contactData = [
        {
            method: "Email",
            linkText:"celinalouissaint@gmail.com",
            link: "https://celinalouissaint@gmail.com",
            icon: <MailOutlineIcon  />,
        },
        {
            method: "Github",
            linkText:"github.com/celinalou92",
            link: "https://github.com/celinalou92",
            icon: <GitHubIcon />,
        },
        {
            method: "LinkedIn",
            linkText:"linkedin.com/in/louissaint-c",
            link: "https://linkedin.com/in/louissaint-c",
            icon: <LinkedInIcon />,
        },
    ]
    return (
        <Box id="footer" sx={{ bgcolor: 'background.default', p: 8 }} component="footer">
            <Typography variant="h5" align="left" margin="1em auto">
                Contact Celina
            </Typography>
            {contactData.map((contact) => (
                <Stack key={contact.method} display="flex" direction={"row"}  alignItems="center" width="100%">
 
                    <Button
                    href={contact.link} 
                    target="_blank"
                    startIcon={contact.icon}
                    size="large"
                    fullWidth
                    >
                        {contact.method}:
                    </Button>
                    <Button 
                    href={contact.link} 
                    target="_blank"

                    color="secondary"
                    >
                        {contact.linkText}
                    </Button>
                </Stack>
            ))}
        </Box>
    );
};      
