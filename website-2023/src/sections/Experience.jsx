import { Grid } from '@mui/material';
import JobCard from '../components/JobCard';
import sectionIcon from '../images/icons/work filled.png';
import { workExperience } from '../data/work-experience';

const ExperienceSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      marginTop="56px"
      id="experience-top"
    >
      <Grid
        item
        xs={9}
        md={8}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <div className="section-header">
              <img src={sectionIcon} />
              <p>Experience</p>
            </div>
          </Grid>

          {workExperience.map((experience) => (
            <Grid
              item
              lg={4}
              md={6}
            >
              <JobCard
                jobTitle={experience.jobTitle}
                companyName={experience.companyName}
                dates={experience.dates}
                jobSummary={experience.jobSummary}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
