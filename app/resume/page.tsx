import projectData from "@/app/data/projectsData";
import { skillsListData } from "@/app/data/skillListData";
import { Box, Button } from "@mui/material";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Projects } from "../components/projects/Projects";
import { SkillList } from "../components/skillList/SkillsList";
import Image from "next/image";

import CelinaResume1 from "/public/celina-resume-1.jpg";
import CelinaResume2 from "/public/celina-resume-2.jpg";
import Link from "next/link";

export default function Resume() {
    return (
        <>
          <Box
            maxWidth="100vw"
            p="4rem"
            // pl="2rem"
            display="flex" flexDirection="row" alignItems="center" justifyContent="space-around"
            sx={{
              bgcolor: 'background.default',
            }}
          >
            <Link target="_blank" href={"https://drive.google.com/file/d/1jq4uc0kEysnk1wdZsgVQudXaudCoo_ff/view?usp=sharing"}>
            <Image alt="Celina's Resume Image"  src={CelinaResume1}/>
            <Image alt="Celina's Resume Image" src={CelinaResume2}/>
            </Link>
            <Button size="large" color="secondary" variant="outlined">Download Celina's Resume</Button>
          </Box>
        </>
      )
};