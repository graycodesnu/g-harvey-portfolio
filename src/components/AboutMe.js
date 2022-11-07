import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AvImg from "../assets/avatarTwo.jpeg";


export default function AboutMe() {
  return (
    <>
      <div class="av">
      <Stack >
        <Avatar 
        alt="Grayson Harvey" 
        src={AvImg}
        sx={{ width: 200, height: 200 }}
        />
      </Stack>
      </div>

      <div className="aboutMeDiv">
        {/* About Me Header */}
        <div className="aboutMeHeader">
          <h1>Hi, I'm Grayson.</h1>
        </div>

        {/* About Me Paragraph */}
        <div class="aboutMeP">
          <p>I am a full-stack engineer with strong skills in JavaScript, MongoDB, mySQL, and React.js. I recently earned a certificate in full-stack development from Northwestern University, complementing my degrees in Psychology and International Studies. 
</p>
        </div>
      </div>
    </>
  );
}
