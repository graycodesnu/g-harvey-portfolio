import { Box, Container, Row } from "../styles/FooterStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <>
      <h3>Footer</h3>
      <Box>
        <h3 style={{ color: "black", textAlign: "center", marginTop: "-50px" }}>
          Find Me On These Platforms
        </h3>
        <Container>
          <Row>
            <IconButton href="https://github.com/graycodesnu/" color="primary">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/graysonharvey/"
              color="primary"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com/GraysonJHarvey"
              color="primary"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Row>
        </Container>
      </Box>
    </>
  );
}
