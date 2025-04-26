import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import themeColors from '../theme-colors';

const cardStyles = {
  cardContainer: {
    borderRadius: '0px',
    boxShadow: 'none',
    textAlign: 'left',
    height: '100%',
    padding: '8px',
  },
  cardContent: {
    flexGrow: 1,
  },
  projectTitle: {
    color: themeColors.textBlack,
    paddingTop: '4px',
  },
  techStack: {
    color: themeColors.darkGrey,
    lineHeight: '1rem',
  },
  projectSummary: {
    // color: themeColors.textBlack,
  },
};

const ProjectCard = (props) => {
  return (
    <Card sx={{ ...cardStyles.cardContainer }}>
      <CardContent sx={{ ...cardStyles.cardContent }}>
        <Grid
          container
          spacing={1.5}
        >
          <Grid
            item
            xs={4}
            lg={3}
          >
            <img
              src={props.projectIconSrc}
              style={{ width: '100%', borderRadius: '50%' }}
              alt={props.projectTitle}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg
          >
            <Typography
              variant="h3"
              sx={{ ...cardStyles.projectTitle }}
            >
              {props.projectTitle}
            </Typography>
            <Typography sx={{ ...cardStyles.techStack }}>
              {props.techStack}
            </Typography>
          </Grid>
        </Grid>

        <Typography sx={{ ...cardStyles.projectSummary }}>
          {props.projectSummary}
        </Typography>
      </CardContent>
      <CardActions>
        {props.link1 ? (
          <Button
            variant="contained"
            size="small"
            disableElevation
            href={props.link1}
            target="_BLANK"
          >
            {props.link1Label}
          </Button>
        ) : (
          <></>
        )}

        {props.link2 ? (
          <Button
            variant="outlined"
            size="small"
            href={props.link2}
            target="_BLANK"
          >
            {props.link2Label}
          </Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
