import { Grid, Typography, Container, Divider, Box } from "@mui/material";
import Skills from "@/types/Skills";
import Skill from "@/types/Skill";

export const SkillList = ({ skillsListData }: { skillsListData: Skills }) => {
    const { certifications, programming_languages, frameworks_libraries, methodologies, testing } = skillsListData.dev;

    const { adobe, business } = skillsListData;


    return (
        <Box>
            <Container sx={{ py: 8 }} maxWidth="xl">
                <Typography
                    variant="h3"
                    align="left"
                    color="text.primary"
                    mb=".5rem"
                >
                    My Skill Set
                </Typography>
                <Divider
                />
                <br />
                <br />
                <Grid container display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" spacing={3} padding={2}>
                    <Grid item display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5">
                        Certifications
                        </Typography>
                        <Divider />
                        <Typography gutterBottom variant="body1">
                        {certifications[0].name}
                        </Typography>
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5">Programming Languages</Typography>
                        <Divider />
                        {programming_languages.map((pl: Skill) => (
                            <Typography key={pl.name} gutterBottom variant="body1">
                                {pl.name}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5">Frameworks & Libraries</Typography>
                        <Divider />
                        {frameworks_libraries.map((fw: Skill) => (
                            <Typography key={fw.name} gutterBottom variant="body1">
                                {fw.name}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5">Methodologies</Typography>
                        <Divider />
                        {methodologies.map((m: Skill) => (
                            <Typography key={m.name} gutterBottom variant="body1">
                                {m.name}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5">Testing</Typography>
                        <Divider />
                        {testing.map((t: Skill) => (
                            <Typography key={t.name} gutterBottom variant="body1">
                                {t.name}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};