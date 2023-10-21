import { Avatar, Grid, Typography } from "@mui/material";
import homeSectionIcon from "../images/placeholder profile pic.png";
import themeColors from "../theme-colors";
import Lottie from "react-lottie";

const homeStyles = {
  homeSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "12.5%",
    backgroundColor: themeColors.backgroundBrown,
  },
  homeImg: {
    width: "30%",
    height: "auto",
    float: "left",
    alignSelf: "flexStart",
    position: "absolute",
    overflow: "hidden",
    zIndex: 2,
    marginTop: "-5%",
  },
  homeDesc: {
    display: "block",
    position: "relative",
    float: "right",
    alignSelf: "flexEnd",
    width: "70%",
    backgroundColor: themeColors.pureWhite,
    padding: "52px 36px 52px 15%",
    textAlign: "justify",
    borderRadius: "8px",
    zIndex: 1,
  },
  fancyHeading: {
    fontFamily: "'Sacramento', cursive, sans-serif",
    fontSize: "4rem",
    lineHeight: "80%",
    textTransform: "lowercase",
    color: themeColors.darkBrown,
  },
  scrollDownBtn: {
    position: "absolute",
    display: "flex",
    height: "36px",
    flexDirection: "row",
    alignItems: "center",
    bottom: "24px",
    margin: "0px auto",
    cursor: "pointer",
  },
  scrollDownText: {
    height: "1rem",
    alignSelf: "center",
  },
};

const HomeSection = () => {
  const scrollDownAnimConfig = {
    path: "https://assets5.lottiefiles.com/packages/lf20_w5yx9nrk.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      sx={homeStyles.homeSection}
    >
      <Grid item>
        <Avatar src={homeSectionIcon} sx={homeStyles.homeImg} />
        <div style={homeStyles.homeDesc}>
          <Typography style={homeStyles.fancyHeading}>
            hello, i'm nicole
          </Typography>
          <Typography>
            I am currently a final year Computer Science student at the National
            University of Singapore pursuing a focus area in Software
            Engineering.
            <br />I aspire to bring convenience to users’ lives through the
            technology that I help to ideate and build.
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <div style={homeStyles.scrollDownBtn}>
          <Lottie options={scrollDownAnimConfig} />
          <Typography style={homeStyles.scrollDownText}>scroll down</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeSection;
