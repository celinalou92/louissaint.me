import { Container, Typography } from "@mui/material";
import Link from "next/link";

export const NavBar = () => {
  const hideOnMoble = { xs: "none", sm: "none", md: "flex" };

  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Portfolio", link: "/#projects" }
  ];

  return (
    <>
      {navItems.map((navItem) => (
        <Link style={{paddingBottom:"1rem"}} key={navItem.name} href={navItem.link}>
          <Typography variant={"h6"} letterSpacing="1px" color="secondary">
            {navItem.name}
          </Typography>
        </Link>
      ))}
    </>
  );
};
