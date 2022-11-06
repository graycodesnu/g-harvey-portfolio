import "./App.css";
import "./index.css";
import Header from "./components/Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

function App() {


  return (
    <div className="App">
      <Header />

      <footer>
        <h3>Find Me On These Platforms</h3>

            <IconButton color="secondary" href="https://github.com/graycodesnu/">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://www.linkedin.com/in/graysonharvey/"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://twitter.com/GraysonJHarvey"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>

      </footer>
    </div>
  );
}

export default App;
