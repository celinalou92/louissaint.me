"use client"
import { AppBar, Toolbar, Typography, Container, Button, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { DrawerAppBar } from "./NavDrawer";
import theme from "../ThemeRegistry/theme";

export const NavBar = () => {
    const flexRowCenterCenterEnd = 
    { display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }

    const hideOnMoble = { xs: "none", sm: 'none', md: "flex" };

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Resume", link: "resume" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#footer" }
    ];

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar 
                elevation={0} 
                sx={{
                    bgcolor: 'background.default', px: 4,
                    py: 2,

                }}
                >
                    <Toolbar >
                        <Link href="/">
                            <Typography variant="h4" color="text.secondary" sx={{ letterSpacing: ".2rem" }}>
                                Louissaint
                            </Typography>
                        </Link>
                        <Container
                        maxWidth="xl"
                            sx={{
                                display: flexRowCenterCenterEnd
                            }}
                        >
                            {
                                navItems.map((navItem) => (
                                    <Button
                                        key={navItem.name}
                                        href={navItem.link}
                                        color="secondary"
                                        sx={{
                                            marginLeft: "1rem", display: hideOnMoble
                                        }}
                                    >
                                        {navItem.name}
                                    </Button>
                                ))
                            }
                        </Container>
                        <DrawerAppBar
                            navItems={navItems}
                        />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
};