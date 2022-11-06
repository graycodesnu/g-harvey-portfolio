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
          <p>
            Adipisicing anim aliqua est ex Lorem labore veniam dolor ullamco
            aute ut qui. Incididunt aliquip exercitation pariatur minim
            reprehenderit ullamco esse. Officia deserunt elit do Lorem nisi
            cillum exercitation excepteur minim nisi quis. Dolor quis ex nisi
            qui. Sunt minim adipisicing labore ipsum veniam. Laborum anim
            incididunt elit deserunt magna aute nulla sint enim.
          </p>
        </div>
      </div>
    </>
  );
}
