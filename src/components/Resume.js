import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { proficiencies } from "../data/resumeData";

export default function Resume() {
  
  // Languages 
  const languagesList = proficiencies.languages.length ? (
    proficiencies.languages.map((languages, index) => (
      <li key={index}>{languages}</li>
    ))
  ) : (
    <p>No Proficiencies</p>
  );

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
        <h1 class="resumeHeader">Resume</h1>
        <div>
          <h3>Proficiencies</h3>
          <div>
            <h4>Languages</h4>
            <ul>
              <li>{languagesList}</li>
            </ul>
          </div>

          <div>
            <h4>Frontend</h4>
            <ul>
              <li>{frontendList}</li>
            </ul>
          </div>

          <div>
            <h4>Backend</h4>
            <ul>
              <li>{backendList}</li>
            </ul>
          </div>
        </div>

        <div class="resumeButton">
          <Stack>
            <Button
              variant="outlined"
              color="secondary"
              href="https://drive.google.com/file/d/1Xg2wn-5dnwyDPpq3cincwQ3QJPYB7RJq/view?usp=sharing"
            >
              Download Resume
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
<h3>Proficiencies</h3>
<ul>
  <li>JavaScript</li>
  <li>React</li>
  <li></li>
</ul>
</div> */
}
