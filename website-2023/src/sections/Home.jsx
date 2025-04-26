import { Avatar, Grid, Typography } from '@mui/material';
import homeSectionIcon from '../images/placeholder profile pic.png';
import themeColors from '../theme-colors';
import Lottie from 'react-lottie';
import { scrollToSection } from '../components/main';

const homeStyles = {
  homeSection: {
    height: '100vh',
    width: '100%',
    padding: '12.5%',
    backgroundColor: themeColors.backgroundBrown,
  },
  homeImg: {
    width: '100%',
    height: 'auto',
  },
  homeDesc: {
    backgroundColor: themeColors.pureWhite,
    padding: '52px 36px',
    textAlign: 'justify',
    height: 'fit-content',
  },
  fancyHeading: {
    fontFamily: "'Sacramento', cursive, sans-serif",
    fontSize: '4rem',
    lineHeight: '80%',
    textTransform: 'lowercase',
    color: themeColors.darkBrown,
    textAlign: 'left',
  },
  scrollDownBtn: {
    position: 'absolute',
    display: 'flex',
    height: '36px',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: '24px',
    margin: '0px auto',
    cursor: 'pointer',
  },
  scrollDownAnim: {
    width: '50px',
  },
  scrollDownText: {
    height: '1rem',
    marginBottom: 0,
    alignSelf: 'center',
  },
};

const HomeSection = () => {
  const scrollDownAnimConfig = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_w5yx9nrk.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={homeStyles.homeSection}
      id="home-top"
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Grid
          item
          xs={6}
          md={4}
        >
          <Avatar
            src={homeSectionIcon}
            sx={homeStyles.homeImg}
          />
        </Grid>
        <Grid
          item
          xs
          sx={homeStyles.homeDesc}
        >
          <Typography style={homeStyles.fancyHeading}>
            hello, i'm nicole
          </Typography>
          <Typography>
            I am currently a full-stack Application Developer at the Aon Centre
            for Innovation and Analytics as part of the company's Graduate
            Programme.
            <br />I aspire to add value to users’ lives through the technology
            that I help to ideate and build.
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <div
          style={homeStyles.scrollDownBtn}
          onClick={() => scrollToSection('experience-top')}
        >
          <Lottie
            options={scrollDownAnimConfig}
            style={homeStyles.scrollDownAnim}
          />
          <Typography style={homeStyles.scrollDownText}>scroll down</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeSection;
