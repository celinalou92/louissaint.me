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
      <Box sx={{ width: "100%", maxWidth: 1200, px: 2 }}>
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A", mb: 4 }}
          variant="h4"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
        >
          My Skill Set
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ py: 2 }}
        >
          {skillCategories.map((category, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={index}
              sx={{ mb: 2 }}
            >
              <Box
                sx={{
                  height: "100%",
                  p: 2,
                  borderRadius: 1
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    borderBottom: ".5px solid #D6A23A",
                    pb: 1,
                    mb: 2,
                  }}
                >
                  {category.title}
                </Typography>
                <Stack spacing={1.5}>
                  {category.skills.map((skill: Skill) => (
                    <Typography key={skill.name} variant="body1">
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