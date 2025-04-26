import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import themeColors from '../theme-colors';
import githubIcon from '../images/icons/github.png';
import { scrollToSection } from './main';

const navBarStyles = {
  topBar: {
    backgroundColor: themeColors.pureWhite,
    boxShadow: '0px 2px 5px 0px hsla(0, 0%, 0%, 0.25)',
    lineHeight: '1rem',
    // visibility: "hidden",
    /* padding: 18px 48px; */
    // padding-left: 36px;
    // padding-right: 36px;
    // z-index: 100;
  },
  topBarLeft: {},
  topBarRight: {},
  clear: {},
};

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      style={navBarStyles.topBar}
      id="nav"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
          <Button
            onClick={() => scrollToSection('home-top')}
            id="nav-home"
          >
            Home
          </Button>
          <Button
            onClick={() => scrollToSection('experience-top')}
            id="nav-experience"
          >
            Experience
          </Button>
          <Button
            onClick={() => scrollToSection('projects-top')}
            id="nav-projects"
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact-top')}
            id="nav-contact"
          >
            Contact
          </Button>
        </Box>
        <Box>
          <IconButton sx={{ flexGrow: 0 }}>
            <a
              href="https://github.com/nicoleang09"
              target="_BLANK"
              rel="noreferrer"
            >
              <img
                src={githubIcon}
                style={{ height: '1.7rem' }}
                alt="Github"
              />
            </a>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
