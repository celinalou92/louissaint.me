import { Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { Contact } from "../Contact/Contact";

export const NavBar = () => {
  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Portfolio", link: "/#projects" },
    { name: "Contact", link: "/#home" },
  ];
  return (
    <Stack
      className="navBar"
      paddingLeft={"1rem"}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          borderBottom: ".5px solid #fff",
        },
      })}
    >
      {navItems.map((navItem) => (
        <Link
          id={`${navItem.name}-link`}
          className="hover mobileNavItem navContact"
          key={navItem.name}
          href={navItem.link}
        >
          <Stack padding={1}>
            <Typography letterSpacing="1px">{navItem.name}</Typography>
          </Stack>
        </Link>
      ))}
      <Stack
        // padding={1}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <Contact />
      </Stack>
    </Stack>
  );
};
