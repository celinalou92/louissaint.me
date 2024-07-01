import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Contact } from "../Contact/Contact";

export const NavBar = () => {
  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Portfolio", link: "/#projects" },
  ];

  return (
    <Stack 
    padding={"1rem"}
    sx={(theme) => ({
      [theme.breakpoints.down('md')]: { 
        display: "flex",
        flexDirection: "row",
      },
    })}
    >
      {navItems.map((navItem) => (
        <Link
          className="hover mobileNavItem"
          key={navItem.name}
          href={navItem.link}
        >
          <Typography variant={"h6"} letterSpacing="1px" color="secondary">
            {navItem.name}
          </Typography>
        </Link>
      ))}
       <Contact/>
    </Stack>
  );
};
