import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

interface NavItem {
  name: string,
  link: string
}

export const DrawerAppBar = ({ navItems }: { navItems: Array<NavItem> }) => {

  const hideOnDesktop = { md: "none", lg: "none", xl: "none" }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ display:hideOnDesktop, textAlign: 'center' }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
        aria-label="menu"
        sx={{ display: hideOnDesktop, mr: 2 }}
        edge="start"
      >
        <MenuIcon
          sx={{ color: "text.secondary" }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {navItems.map((navItem) => (
          <MenuItem
            key={navItem.name}
          >
            <Typography component="a" href={navItem.link} textAlign="center">{navItem.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
};