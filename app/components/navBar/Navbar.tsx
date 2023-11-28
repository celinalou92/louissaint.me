"use client"
import { AppBar, Toolbar, Typography, IconButton, Container, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react";
import { DrawerAppBar } from "./NavDrawer";

export const NavBar = () => {
    const flexRowCenterCenterEnd={ display: 'flex', flexDirection: "row", alignItems: "center",  justifyContent: "flex-end" }

    const hideOnMoble = { xs: "none", sm: 'none', md:"flex" };
    const [mobileOpen, setMobileOpen] = useState(false);
 

      const navItems = ['Home', "Projects", 'About', 'Contact'];
    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{display: 'flex', flexDirection: "row",  justifyContent:"space-between", padding:"1rem"}}>
                    <Link href="/">
                        <Typography variant="h4" color="text.secondary" sx={{ letterSpacing: ".2rem" }}>
                            Louissaint
                        </Typography>
                    </Link>
                    <Container  sx={{margin:"10px", display:flexRowCenterCenterEnd}}>
                    <Button href="/"
                            color="secondary"
                            sx={{ marginLeft: "1rem", display: hideOnMoble }}
                        >
                            Home
                        </Button>
                        <Button href="/#projects"
                            sx={{ marginLeft: "1rem", display: hideOnMoble}}
                            color="secondary"
                        >
                            Projects
                        </Button>
                        <Button href="/resume"
                            color="secondary"
                            sx={{ marginLeft: "1rem", display: hideOnMoble }}
                        >
                            Resume
                        </Button>
                        <Button href="#footer"
                            sx={{ marginLeft: "1rem", display: hideOnMoble }}
                            color="secondary"
                        >
                            Contact
                        </Button>
                    </Container>
                    
                    <DrawerAppBar 
                    setMobileOpen={setMobileOpen}
                    mobileOpen={mobileOpen}
                    navItems={navItems}
                    />
                </Toolbar>
            </AppBar>
        </>
    );
};