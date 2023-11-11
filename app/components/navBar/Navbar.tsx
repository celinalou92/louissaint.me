import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    return (
        <>
            <AppBar position="relative">
                <Toolbar sx={{ display: "flex", flexDirection:"row", justifyContent: "space-between", margin: "1.5rem 1rem" }}  >
                    <Typography variant="h4" color="text.secondary" noWrap sx={{ letterSpacing: ".2rem" }}>
                        Louissaint
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        sx={{ mr: 2 }}
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