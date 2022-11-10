import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { proficiencies } from "../data/resumeData";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Resume() {

  // Frontend
  const frontendList = proficiencies.frontend.length ? (
    proficiencies.frontend.map((frontend, index) => (
      <li key={index}>{frontend}</li>
    ))
  ) : (
    <p>No Proficiencies</p>
  );

  // Backend
  const backendList = proficiencies.backend.length ? (
    proficiencies.backend.map((backend, index) => (
      <li key={index}>{backend}</li>
    ))
  ) : (
    <p>No Proficiencies</p>
  );

  return (
    <>
      <div class="resumeBox">
        <h1 class="resumeHeader">Proficiencies</h1>
        <div>
          <div class="resumeButton">
            <Stack>
              <Button
                variant="outlined"
                color="secondary"
                href="https://drive.google.com/file/d/1Xg2wn-5dnwyDPpq3cincwQ3QJPYB7RJq/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </Button>
            </Stack>
          </div>
          <Box>
            <div class="cardBox">
              <div class="skillCard">
                <Card elevation={0}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Front-End
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <div>
                        <ul class="skillList">
                          <li>{frontendList}</li>
                        </ul>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div class="skillCard">
                <Card elevation={0}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Back-End
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <div>
                        <ul class="skillList">
                          <li>{backendList}</li>
                        </ul>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
