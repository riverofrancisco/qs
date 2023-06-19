import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LOGO from "./logoQS gancho.png";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Link } from "@mui/material";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { ModeSwitcher } from "../../redux/portfolio/actions";

import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  position: "fixed",

  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
}));

const navItems = ["Inicio", "Nosotros", "Eventos", "Contacto"];

export default function NavBar() {
  //// PROGRESS BAR
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const handleScroll = () => {
    const scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    const progress = (scrollTop / scrollMax) * 100;
    setScrollProgress(progress);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //// REDUX DARK/LIGHTMODE
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector((state) => state.global.mode);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [section, setSection] = React.useState("");
  ////DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(ModeSwitcher());
    console.log(currentMode);
    setIsDarkMode(!isDarkMode);

    // Lógica para cambiar el tema aquí
  };

  ////SCROLLING WITH CLICK

  function scrollToTextField(id: string) {
    if (mobileOpen) setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = -60; // ajuste de posición para la barra de navegación
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setSection(id);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  ////RESPONSIVE MENU
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobileOpen(open);
    };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <SwipeableDrawer
        anchor="top"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((it) => {
              return (
                <ListItem key={it} disablePadding>
                  <ListItemButton onClick={() => scrollToTextField(it)}>
                    {it}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </SwipeableDrawer>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar component="nav">
          <Toolbar
            sx={{
              px: { xs: 5, md: 5 },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
                display: { xs: "flex", sm: "flex", md: "none" },
                flexGrow: 0,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <img width={30} src={LOGO} alt="logo" />

              <Typography variant="h6" component="div" color="white">
                QS
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Box
                  key={item}
                  borderRadius={1}
                  borderBottom={section === item ? 1 : 0}
                  sx={{
                    "&:hover": {
                      borderBottom: 1,
                    },
                  }}
                >
                  {" "}
                  <Button
                    sx={{ color: "#fff" }}
                    onClick={() => scrollToTextField(item)}
                  >
                    <Typography>{item}</Typography>
                  </Button>{" "}
                </Box>
              ))}
            </Box>
            <Box>
              <Button
                color="secondary"
                onClick={handleToggleDarkMode}
                sx={{
                  display: "flex",
                  justifySelf: "end",
                  /* boxShadow: { xs: 1, md: 0 }, */
                }}
              >
                {isDarkMode ? (
                  <LightModeRoundedIcon />
                ) : (
                  <DarkModeRoundedIcon />
                )}

                {/* <Typography ml={1} color="primary" variant="button">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Typography> */}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <StyledLinearProgress
        variant="determinate"
        value={scrollProgress}
        color="secondary"
      />
    </Box>
  );
}
