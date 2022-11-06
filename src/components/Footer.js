import { Box, Container, Row } from "../styles/FooterStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    // <>
    //   <Box>
    //     <h3>Find Me On These Platforms</h3>
    //     <Container>
    //       <Row>
    //         <IconButton color="warning" href="https://github.com/graycodesnu/">
    //           <GitHubIcon fontSize="large" />
    //         </IconButton>
    //         <IconButton
    //           color="warning"
    //           href="https://www.linkedin.com/in/graysonharvey/"
    //         >
    //           <LinkedInIcon fontSize="large" />
    //         </IconButton>
    //         <IconButton
    //           color="warning"
    //           href="https://twitter.com/GraysonJHarvey"
    //         >
    //           <TwitterIcon fontSize="large" />
    //         </IconButton>
    //       </Row>
    //     </Container>
    //   </Box>
    // </>

    <>

      <h3>Find Me On These Platforms</h3>
      <Container>
        <Row>
          <IconButton color="warning" href="https://github.com/graycodesnu/">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="warning"
            href="https://www.linkedin.com/in/graysonharvey/"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="warning"
            href="https://twitter.com/GraysonJHarvey"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Row>
      </Container>

  </>

  );
}
