import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import sectionIcon from "../images/icons/work filled.png";

const ExperienceSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      marginTop="56px"
      id="experience-top"
    >
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="section-header">
              <img src={sectionIcon} />
              <p>Experience</p>
            </div>
          </Grid>

          <Grid item sm={6}>
            <JobCard
              jobTitle="Frontend Development Intern"
              companyName="Aevice Health"
              dates="Jan 2022 - Jun 2022"
              jobSummary="Developed and tested frontend features for the AeviceMD Android app."
            />
          </Grid>
          <Grid item sm={6}>
            <JobCard
              jobTitle="Mobile Application Tester"
              companyName="Electrolux"
              dates="May 2021 - Sep 2021"
              jobSummary="Conducted manual testing and bug logging for features in the Electrolux Life and AEG Home apps. Documented test steps for new features."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
