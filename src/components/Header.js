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

export default function Header() {
  return (
    <>
      {/* browser router */}
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Grayson Harvey
              </Typography>

              {/* links */}
              <Link to="">
                <Button color="inherit">About Me</Button>
              </Link>
              <Link to="portfolio">
                <Button color="inherit">Portfolio</Button>
              </Link>
              <Link to="Contact">
                <Button color="inherit">Contact</Button>
              </Link>
              <Link to="Resume">
                <Button color="inherit">Resume</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>

        {/* routes */}
        <Routes>
          <Route path="" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
