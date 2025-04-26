import { Grid } from '@mui/material';
import sectionIcon from '../images/icons/coding filled.png';
import ProjectCard from '../components/ProjectCard';
import themeColors from '../theme-colors';
import peerPrepIcon from '../images/portfolio/peerprep-logo.png';
import parentPalIcon from '../images/portfolio/parentpal-logo.png';
import tabbyIcon from '../images/portfolio/tabby-logo.png';
import websiteIcon from '../images/portfolio/website icon.png';
import tomeVaultIcon from '../images/portfolio/tome-vault.png';
import liIcon from '../images/portfolio/dashboard-logo.png';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const icons = {
    PeerPrep: peerPrepIcon,
    ParentPal: parentPalIcon,
    'Tabby the Task Bot': tabbyIcon,
    'Personal Website': websiteIcon,
    'Tome Vault': tomeVaultIcon,
    'Li.': liIcon,
  };

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
        md={2}
        xs={1.5}
        backgroundColor={themeColors.pureWhite}
      ></Grid>
      <Grid
        item
        xs={9}
        md={8}
        backgroundColor={themeColors.pureWhite}
      >
        <div className="section-header">
          <img src={sectionIcon} />
          <p>Projects</p>
        </div>
      </Grid>
      <Grid
        item
        xs
        backgroundColor={themeColors.pureWhite}
      ></Grid>

      <Grid
        item
        md={8}
        xs={9}
        sx={{ paddingTop: '20px', paddingBottom: '20px' }}
      >
        <Grid
          container
          spacing={3}
        >
          {projects.map((project) => (
            <Grid
              item
              lg={4}
              md={6}
            >
              <ProjectCard
                projectIconSrc={icons[project.projectTitle]}
                projectTitle={project.projectTitle}
                techStack={project.techStack}
                projectSummary={project.projectSummary}
                link1={project.link1}
                link1Label={project.link1Label}
                link2={project.link2}
                link2Label={project.link2Label}
              />
            </Grid>
          ))}
          <Grid
            item
            sm={6}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
