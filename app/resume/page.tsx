/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Link, Stack } from "@mui/material";
import Image from "next/image";
import CelinaResume1 from "/public/celina-resume-1.jpg";
import CelinaResume2 from "/public/celina-resume-2.jpg";


export default function Resume() {
  const resumeShareLink = "https://drive.google.com/file/d/180h6f1ewEGQYlxbc0BYQGzM15SKABF3S/view?usp=drive_link"
  return (
    <>
      <Box
        maxWidth="100vw"
        p="4rem"
        // pl="2rem"
        display="flex" flexDirection="column" alignItems="center" justifyContent="center"
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Button target="_blank" href={resumeShareLink} size="large" color="secondary" variant="outlined">Download Celina's Resume</Button>
        <Stack  
          margin="2rem"
        >
          <Link 
          align="center"
          sx={{ justifyContent:"center", alignItems:"center"}}
          target="_blank"
            href={resumeShareLink}>
            <Image alt="Celina's Resume Image" src={CelinaResume1} />
            <Image alt="Celina's Resume Image" src={CelinaResume2} />
          </Link>
        </Stack>
      </Box>
    </>
  )
};