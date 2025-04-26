import { Avatar, Grid, Typography } from '@mui/material';
import homeSectionIcon from '../images/home-profile-pic.png';
import themeColors from '../theme-colors';
import Lottie from 'react-lottie';
import { scrollToSection } from '../components/main';

const homeStyles = {
  homeSection: {
    height: '100vh',
    width: '100%',
    backgroundColor: themeColors.backgroundBrown,
  },
  homeImg: {
    width: '100%',
    height: 'auto',
  },
  homeDesc: {
    backgroundColor: themeColors.pureWhite,
    padding: '52px 36px 24px',
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
    display: 'flex',
    height: '36px',
    flexDirection: 'row',
    alignItems: 'center',
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
      direction="row"
      sx={homeStyles.homeSection}
      id="home-top"
    >
      <Grid
        item
        xs={12}
      ></Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={3}
        flexGrow={1}
      >
        <Grid
          item
          xs={6}
          md={2}
        >
          <Avatar
            src={homeSectionIcon}
            sx={homeStyles.homeImg}
          />
        </Grid>
        <Grid
          item
          xs={9}
          md={4}
          sx={homeStyles.homeDesc}
        >
          <Typography
            sx={(theme) => ({
              ...homeStyles.fancyHeading,
              [theme.breakpoints.down('md')]: { fontSize: '3rem' },
            })}
          >
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

      <Grid
        item
        alignSelf="flex-end"
        marginBottom="24px"
      >
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
