import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export const Footer = () => {
    const contactData = [
        {
            method: "Email",
            linkText: "celinalouissaint@gmail.com",
            link: "mailto:celinalouissaint@gmail.com",
            icon: <MailOutlineIcon />,
        },
        {
            method: "Github",
            linkText: "github.com/celinalou92",
            link: "https://malito:celinalou92",
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
        <Box id="footer" sx={{ bgcolor: 'background.default', p: 8 }} component="footer" paddingY="20px">
            <Typography variant="h4" margin="1em auto" textAlign={"center"}>
                Contact Celina
            </Typography>
            <Divider />
            <br />
            <Stack display={"flex"} alignItems={"center"} flexDirection={"row"} justifyContent={"space-evenly"}>
                <Stack >
                    {contactData.map((contact) => (
                        <Stack key={contact.method} display="flex" flexDirection="row">
                            <Button
                                href={contact.link}
                                color="secondary"
                                startIcon={contact.icon}
                                size="large"
                            >
                                {contact.method}:
                            </Button>
                            <Button
                                href={contact.link}
                                color="info"
                            >
                                {contact.linkText}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
                <Button rel="noreferrer" variant="outlined" color="secondary" href="https://drive.google.com/file/d/1lOMkfjbUqTdxuw2p4fIH7lGdyPxdCEe5/view?usp=sharing">
                    View Resume
                </Button>
            </Stack>
        </Box>
    );
};      
