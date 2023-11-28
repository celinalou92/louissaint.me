import { AppBar, Toolbar, Typography, IconButton, Container, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export const NavBar = () => {
    const flexRowCenterCenterEnd={ display: 'flex', flexDirection: "row", alignItems: "center",  justifyContent: "flex-end" }

    const hideOnMoble = { xs: "none", sm: 'none', md:"flex" };
    const hideOnDesktop = { md:"none", lg:"none", xl: "none"}
    
    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{display:flexRowCenterCenterEnd}}>
                    <Link href="/">
                        <Typography variant="h4" color="text.secondary" sx={{ letterSpacing: ".2rem" }}>
                            Louissaint
                        </Typography>
                    </Link>
                    <Container sx={{display:flexRowCenterCenterEnd}}>
                        <Button href="#projects"
                            sx={{ margin: "1rem", display: hideOnMoble}}
                            color="secondary"
                        >
                            Projects
                        </Button>
                        <Button href="#text-buttons"
                            color="secondary"
                            sx={{ margin: "1rem", display: hideOnMoble }}
                        >
                            Resume
                        </Button>
                        <Button href="#footer"
                            sx={{ margin: "1rem", display: hideOnMoble }}
                            color="secondary"
                        >
                            Contact
                        </Button>
                    </Container>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        sx={{ display: hideOnDesktop, mr: 2 }}
                    >
                        <MenuIcon
                            sx={{ color: "text.secondary" }}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};