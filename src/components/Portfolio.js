import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';

export default function Portfolio () {

  return (
      <>
      <h2>Portfolio</h2>
{/* *********** goodWeeds *********** */}
      <div>
      <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <CardActionArea href="https://goodweeds.herokuapp.com/">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/goodWeeds.png')}
          alt="goodWeeds"
        />
        </CardActionArea>

      <CardActions>
        <Typography variant='h5'>
          goodWeeds
        </Typography>
        <IconButton href="https://goodweeds.herokuapp.com/">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/The-Brain-Cell-Collective/goodWeeds" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>

{/* *********** INtertain *********** */}
      <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://nw-bootcamp-team1.github.io/Night-In/home-page/index">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/INtertain.png')}
          alt="INtertain"
        />
        </CardActionArea>
      <CardActions>
      <Typography variant='h5'>
          INtertain
        </Typography>
        <IconButton href="https://nw-bootcamp-team1.github.io/Night-In/home-page/index">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/NW-Bootcamp-Team1/Night-In" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>

{/* *********** Workday Scheduler *********** */}
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://graycodesnu.github.io/work-day-scheduler/">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/workday-scheduler.png')}
          alt="Workday Scheduler"
        />
        </CardActionArea>
        <CardActions>
        <Typography variant='h5'>
          Workday Scheduler
        </Typography>
        <IconButton href="https://graycodesnu.github.io/work-day-scheduler/">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/graycodesnu/work-day-scheduler" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>

{/* *********** Weather Dashboard *********** */}
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://graycodesnu.github.io/weather-dashboard-week06/">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/weather-dash.png')}
          alt="Weather Dashboard"
        />
        </CardActionArea>
      <CardActions>
        <Typography variant='h5'>
          Weather Dashboard
        </Typography>
        <IconButton href="https://graycodesnu.github.io/weather-dashboard-week06/">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/graycodesnu/weather-dashboard-week06" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>

{/* *********** Password Generator *********** */}
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://graycodesnu.github.io/password_generator/">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/password-gen.png')}
          alt="Password Generator"
        />
        </CardActionArea>
      <CardActions>
      <Typography variant='h5'>
          Password Generator
        </Typography>
        <IconButton href="https://graycodesnu.github.io/password_generator/">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/graycodesnu/password_generator" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>

{/* *********** Express Notes *********** */}
  <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://heroku-express-notes.herokuapp.com/">
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/expressnotes.png')}
          alt="Express Notes"
        />
        </CardActionArea>
      <CardActions>
      <Typography variant='h5'>
          Express Notes
        </Typography>
        <IconButton href="https://heroku-express-notes.herokuapp.com/">
          <InsertLinkTwoToneIcon />
        </IconButton>
        <IconButton href="https://github.com/graycodesnu/express-notes" color='primary'>
        <GitHubIcon />
        </IconButton>
      </CardActions>
      </Card>
      </div>
    </>
  );
}