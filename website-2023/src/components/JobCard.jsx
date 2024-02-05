import { Card, CardContent, Typography } from "@mui/material";
import themeColors from "../theme-colors";

const cardStyles = {
  cardContainer: {
    borderWidth: "2px",
    borderColor: themeColors.lightBrown,
    borderRadius: "0px",
    textAlign: "left",
    height: "100%",
    padding: "8px",
  },
  jobTitle: {
    color: themeColors.textBlack,
  },
  companyName: {
    color: themeColors.darkBrown,
  },
  dates: {
    color: themeColors.darkGrey,
    lineHeight: "1rem",
  },
  jobSummary: {
    // color: themeColors.textBlack,
  },
};

// const JobCardProps = {
//   jobTitle: String,
//   companyName: String,
//   dates: String,
//   jobSummary: String,
// };

const JobCard = (props) => {
  return (
    <Card variant="outlined" sx={{ ...cardStyles.cardContainer }}>
      <CardContent>
        <Typography variant="h3" sx={{ ...cardStyles.jobTitle }}>
          {props.jobTitle}
        </Typography>
        <Typography variant="h3" sx={{ ...cardStyles.companyName }}>
          @ {props.companyName}
        </Typography>

        <Typography sx={{ ...cardStyles.dates }}>{props.dates}</Typography>
        <Typography sx={{ ...cardStyles.jobSummary }}>
          {props.jobSummary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
