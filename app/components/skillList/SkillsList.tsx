import { Grid, Typography, Stack, Box } from "@mui/material";
import Skills from "@/types/Skills";
import Skill from "@/types/Skill";

export const SkillList = ({ skillsListData }: { skillsListData: Skills }) => {
  const {
    certifications,
    programming_languages,
    frameworks_libraries,
    methodologies,
    testing,
  } = skillsListData.dev;

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: programming_languages,
    },
    {
      title: "Methodologies",
      skills: methodologies,
    },
    {
      title: "Frameworks & Libraries",
      skills: frameworks_libraries,
    },
    {
      title: "Testing",
      skills: testing,
    },
    {
      title: "Certifications",
      skills: certifications,
    },
  ];

  return (
    <Stack
      id="skills"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="sectionContainer"
    >
      <Box sx={{ width: "80%", maxWidth: 1200, px: 2 }}>
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A", mb: 4 }}
          variant="h5"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
        >
          My Skill Set
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {skillCategories.map((category, index) => (
            <Grid 
              item 
              xs={6} 
              md={4} 
              key={index}
            >
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1
                }}
              >
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{
                    borderBottom: ".5px solid #D6A23A",
                    pb: .5,
                    mb: 2,
                  }}
                >
                  {category.title}
                </Typography>
                <Stack spacing={.5}>
                  {category.skills.map((skill: Skill) => (
                    <Typography key={skill.name} variant="body2">
                      {skill.name}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};