import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function Header() {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Grayson Harvey
              </Typography>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">Resume</Button>
            </Toolbar>
          </AppBar>
        </Box>
        {/* <Routes>
          <Route exact path="/AboutMe" element={<AboutMe />}></Route>
          <Route exact path="/Portfolio" element={<Portfolio />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Resume" element={<Resume />}></Route>
        </Routes> */}
    </>
  );
}
