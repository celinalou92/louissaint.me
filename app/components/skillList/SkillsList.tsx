import { Grid, Typography, Stack, Divider, Box } from "@mui/material";
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

  const { adobe, business } = skillsListData;

  return (
    <Stack
      id="about"
      height="100vh"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingTop={"20%"}
    >
      <Stack maxWidth={"500px"} maxHeight={"500px"}>
        <Typography
          sx={{ letterSpacing: ".2rem", borderBottom: ".5px solid #D6A23A" }}
          variant="h3"
          lineHeight="1.6"
          gutterBottom
          textAlign="center"
        >
          My Skill Set
        </Typography>
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={2}
          rowGap={5}
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            width={"230px"}
            height={"180px"}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                borderBottom: ".5px solid #D6A23A",
              }}
            >
              Programming Languages
            </Typography>
            {programming_languages.map((pl: Skill) => (
              <Typography key={pl.name} gutterBottom variant="body1">
                {pl.name}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            width={"230px"}
            maxHeight={"180px"}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                borderBottom: ".5px solid #D6A23A",
              }}
            >
              Methodologies
            </Typography>
            {methodologies.map((m: Skill) => (
              <Typography key={m.name} gutterBottom variant="body1">
                {m.name}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            width={"230px"}
            height={"180px"}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                borderBottom: ".5px solid #D6A23A",
              }}
            >
              Frameworks & Libraries
            </Typography>
            {frameworks_libraries.map((fw: Skill) => (
              <Typography key={fw.name} gutterBottom variant="body1">
                {fw.name}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            width={"230px"}
            height={"180px"}
          >
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                borderBottom: ".5px solid #D6A23A",
              }}
            >
              Testing
            </Typography>
            {testing.map((t: Skill) => (
              <Typography key={t.name} gutterBottom variant="body1">
                {t.name}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            width={"230px"}
            height={"180px"}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                borderBottom: ".5px solid #D6A23A",
              }}
            >
              Certifications
            </Typography>
            <Typography gutterBottom variant="body1">
              {certifications[0].name}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
