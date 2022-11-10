import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import { Stack } from "@mui/system";

export default function Header() {
  return (
    <>
      {/* browser router */}
      <div>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <div class="nav">
                <Toolbar>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Grayson Harvey
                  </Typography>

                  {/* links */}

                  <Stack direction="row" spacing={2}>
                    <Link to="g-harvey-portfolio" style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="secondary">
                        About Me
                      </Button>
                    </Link>
                    <Link to="portfolio" style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="secondary">Portfolio</Button>
                    </Link>
                    <Link to="Contact" style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="secondary">Contact</Button>
                    </Link>
                    <Link to="Resume" style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="secondary">Resume</Button>
                    </Link>
                  </Stack>
                </Toolbar>
              </div>
            </AppBar>
          </Box>
          {/* routes */}
          <Routes>
            <Route path="g-harvey-portfolio" element={<AboutMe />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
