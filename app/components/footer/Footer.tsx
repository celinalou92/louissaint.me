import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";

export const Footer = () => {
  const contactData = [
    {
      linkText: "celinalouissaint@gmail.com",
      link: "mailto:celinalouissaint@gmail.com",
      icon: <MailOutlineIcon color="secondary" />,
    },
    {
      linkText: "github.com/celinalou92",
      link: "https://github.com/celinalou92",
      icon: <GitHubIcon color="secondary" />,
    },
    {
      linkText: "linkedin.com/in/louissaint-c",
      link: "https://linkedin.com/in/louissaint-c",
      icon: <LinkedInIcon color="secondary" />,
    },
  ];
  return (
    <Stack>
        <br/>
        <Typography variant="h6">Contact Me:</Typography>
      {contactData.map((contact) => (
        <Stack key={contact.linkText} display="flex" flexDirection="row"paddingBottom="3px">
          {contact.icon}
          <Link style={{paddingLeft:"2%"}} target="_blank" rel="noreferrer" href={contact.link}>
            <Typography>{contact.linkText}</Typography>
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};
