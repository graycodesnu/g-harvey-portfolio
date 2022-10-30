import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

export default function Header() {
  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Grayson Harvey
              </Typography>
              <Link to={AboutMe}>
                <Button color="inherit">About Me</Button>
              </Link>
              <Link to={Portfolio}>
                <Button color="inherit">Portfolio</Button>
              </Link>
              <Link to={Contact}>
                <Button color="inherit">Contact</Button>
              </Link>
              <Link to={Resume}>
                <Button color="inherit">Resume</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route exact path="/AboutMe" element={<AboutMe />}></Route>
          <Route exact path="/Portfolio" element={<Portfolio />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </>
  );
}
