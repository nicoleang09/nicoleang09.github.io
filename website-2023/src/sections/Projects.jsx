import { Grid } from "@mui/material";
import sectionIcon from "../images/icons/coding filled.png";
import ProjectCard from "../components/ProjectCard";
import themeColors from "../theme-colors";
import peerPrepIcon from "../images/portfolio/peerprep-logo.png";
import parentPalIcon from "../images/portfolio/parentpal-logo.png";
import tabbyIcon from "../images/portfolio/tabby-logo.png";
import websiteIcon from "../images/portfolio/website icon.png";

const ProjectsSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      backgroundColor={themeColors.backgroundBrown}
      marginTop="56px"
      id="projects-top"
    >
      <Grid
        item
        xs={12}
        backgroundColor={themeColors.pureWhite}
        paddingLeft="25%"
      >
        <div className="section-header">
          <img src={sectionIcon} />
          <p>Projects</p>
        </div>
      </Grid>

      <Grid item md={6} sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <ProjectCard
              projectIconSrc={peerPrepIcon}
              projectTitle="PeerPrep"
              techStack="React | Node.js | Sequelize | SQLite | Socket.IO | Mocha/Chai"
              projectSummary="PeerPrep is an interview preparation platform and peer matching system, where students can find peers to practice whiteboard-style interview questions together."
              link1="https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g37/"
              link1Label="GitHub Repo"
            />
          </Grid>

          <Grid item sm={6}>
            <ProjectCard
              projectIconSrc={parentPalIcon}
              projectTitle="ParentPal"
              techStack="Java | JavaFX | JUnit"
              projectSummary="ParentPal is a desktop app for managing your childrens' contacts and their related appointments, optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI)."
              link1="https://github.com/nicoleang09/tp/"
              link1Label="GitHub Repo"
              link2="https://ay2021s2-cs2103t-w13-3.github.io/tp/"
              link2Label="Documentation"
            />
          </Grid>

          <Grid item sm={6}>
            <ProjectCard
              projectIconSrc={tabbyIcon}
              projectTitle="Tabby the Task Bot"
              techStack="Java | JavaFX | JUnit"
              projectSummary="Tabby is a command line task bot written in Java. It is used to maintain a task list consisting of various categories of tasks, such as to-dos, deadline and events."
              link1="https://github.com/nicoleang09/ip/"
              link1Label="GitHub Repo"
              link2="https://nicoleang09.github.io/ip/"
              link2Label="User Guide"
            />
          </Grid>

          <Grid item sm={6}>
            <ProjectCard
              projectIconSrc={websiteIcon}
              projectTitle="Personal Website"
              techStack="HTML | CSS | JavaScript"
              projectSummary="This website is a personal portfolio page built to showcase my past work experience and projects done."
              link1="https://nicoleang09.github.io/"
              link1Label="Live Demo"
            />
          </Grid>
          <Grid item sm={6}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
