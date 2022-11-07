import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import InsertLinkTwoToneIcon from "@mui/icons-material/InsertLinkTwoTone";
import { Box } from "../styles/PortfolioStyles";


export default function Portfolio() {
  return (
    <>
      <div class="portfolioHeader">
        <h1>Portfolio</h1>
      </div>
      <Box>
        {/* *********** goodWeeds *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://goodweeds.herokuapp.com/">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/goodWeeds.png")}
                alt="goodWeeds"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">goodWeeds</Typography>
                <IconButton
                  href="https://goodweeds.herokuapp.com/"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/The-Brain-Cell-Collective/goodWeeds"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>

        {/* *********** INtertain *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://nw-bootcamp-team1.github.io/Night-In/home-page/index">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/INtertain.png")}
                alt="INtertain"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">INtertain</Typography>
                <IconButton
                  href="https://nw-bootcamp-team1.github.io/Night-In/home-page/index"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/NW-Bootcamp-Team1/Night-In"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>

        {/* *********** Workday Scheduler *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://graycodesnu.github.io/work-day-scheduler/">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/workday-scheduler.png")}
                alt="Workday Scheduler"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">Workday Scheduler</Typography>
                <IconButton
                  href="https://graycodesnu.github.io/work-day-scheduler/"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/graycodesnu/work-day-scheduler"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>

        {/* *********** Weather Dashboard *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://graycodesnu.github.io/weather-dashboard-week06/">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/weather-dash.png")}
                alt="Weather Dashboard"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">Weather Dashboard</Typography>
                <IconButton
                  href="https://graycodesnu.github.io/weather-dashboard-week06/"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/graycodesnu/weather-dashboard-week06"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>

        {/* *********** Password Generator *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://graycodesnu.github.io/password_generator/">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/password-gen.png")}
                alt="Password Generator"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">Password Generator</Typography>
                <IconButton
                  href="https://graycodesnu.github.io/password_generator/"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/graycodesnu/password_generator"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>

        {/* *********** Express Notes *********** */}
        <div class="projectCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href="https://heroku-express-notes.herokuapp.com/">
              <CardMedia
                component="img"
                height="200"
                image={require("../assets/expressnotes.png")}
                alt="Express Notes"
              />
            </CardActionArea>
            <div class="portfolioCardLabel">
              <CardActions>
                <Typography variant="h5">Express Notes</Typography>
                <IconButton
                  href="https://heroku-express-notes.herokuapp.com/"
                  color="secondary"
                >
                  <InsertLinkTwoToneIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/graycodesnu/express-notes"
                  color="secondary"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>
      </Box>
    </>
  );
}
