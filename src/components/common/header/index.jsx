import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchBox from "./search-box.jsx";
import UserMenu from "./user-menu.jsx";
import { Link } from "@mui/material";
import MobileDrawer from "../mobile-drawer.jsx";
import LoginIcon from "@mui/icons-material/Login";
import { Logo } from "../logo.jsx";
import { AnimatedUnderlineBox } from "../animated-underline-box.jsx";

const pages = [
  { href: "/films", label: "films" },
  { href: "/lists", label: "lists" },
  { href: "/members", label: "members" },
  { href: "/journals", label: "journals" },
];

export const HeaderHeight = 64;

function Header() {
  const signed_in = false;

  return (
    <>
      <AppBar position="fixed" sx={{ background: "rgba(240, 240, 240, 0.1)", height: HeaderHeight, boxShadow: "none" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                justifyContent: "space-between",
              },
            })}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }} mr={1}>
              <MobileDrawer pages={pages} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
              <Logo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((i, idx) => (
                <Button key={idx} sx={{ my: 2, color: "white", display: "block" }} href={i.href}>
                  <AnimatedUnderlineBox>{i.label}</AnimatedUnderlineBox>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexGrow: 0 }}>
              <SearchBox />
              <Box width={10}></Box>
              {signed_in ? (
                <UserMenu />
              ) : (
                <>
                  <Button variant={"contained"} color={"warning"} href={"/sign-in"} sx={{ boxShadow: "none" }}>
                    <Typography
                      variant={"body2"}
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                          display: "none",
                        },
                      })}
                    >
                      Sign In
                    </Typography>
                    <LoginIcon
                      href={"/sign-in"}
                      sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                          display: "none",
                        },
                      })}
                    />
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box height={HeaderHeight}></Box>
    </>
  );
}
export default Header;
