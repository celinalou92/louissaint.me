import { AppBar, Toolbar, Typography, IconButton, Container, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    return (
        <>
            <AppBar position="relative" component={"div"}>
                <Toolbar sx={{ margin: "2rem", display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}  >
                    <Container sx={{ with: "auto"}}>
                        <Typography variant="h4" color="text.secondary" sx={{ letterSpacing: ".2rem" }}>
                            Louissaint
                        </Typography>
                    </Container>
                    <Container sx={{display: 'flex', flexDirection: "row", justifyContent:"flex-end"}}>
                    <Button href="#text-buttons" 
                     sx={{ margin: "1rem", display: { xs: 'none', sm: 'block' } }}
                     color="secondary"
                    >
                            Projects
                    </Button>
                    <Button href="#text-buttons"
                    color="secondary"
                     sx={{ margin: "1rem", display: { xs: 'none', sm: 'block' } }}
                    >
                    Resume
                    </Button>
                    <Button href="#text-buttons"
                     sx={{ margin: "1rem", display: { xs: 'none', sm: 'block' } }}
                     color="secondary"
                    >
                    Contact
                    </Button>
                    </Container>
                    {/* <IconButton
                        size="large"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon
                            sx={{ color: "text.secondary" }}
                        />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </>
    );
};