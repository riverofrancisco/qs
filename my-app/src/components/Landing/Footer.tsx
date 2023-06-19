import React from "react";
import { Typography, Link, Button, ListItemIcon } from "@mui/material/";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import { ColoursDark } from "../../theme/theme";
import Paper from "@mui/material/Paper";
import LOGO from "../Nav/logoQS gancho.png";


const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    linkto: "https://www.linkedin.com/in/rivero-francisco/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    linkto: "https://github.com/riverofrancisco",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:franciscojose.rivero.ar@gmail.com",
  },
];

const Footer: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <footer>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor={ColoursDark.VioletaOscuro}
        color="white"
        py={4}
      >
        <Box display="flex" justifySelf="center">
        <img width={30} src={LOGO} alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "monospace",
              fontWeight: { sm: 700 },
              letterSpacing: { sm: ".3rem" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QS
          </Typography>
        </Box>

        <Stack display="flex" flexDirection="row" alignItems="center">
          {actions.map((action) => {
            return (
              <IconButton
                color="inherit"
                key={action.name}
                onClick={() => handleLink(action.linkto)}
              >
                {action.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
