import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AvImg from "../assets/avatarTwo.jpeg";


export default function AboutMe() {
  return (
    <>
      <Stack>
        <Avatar 
        alt="Grayson Harvey" 
        src={AvImg}
        sx={{ width: 150, height: 150 }}
        />
      </Stack>

      <div className="aboutMeDiv">
        {/* About Me Header */}
        <div className="aboutMeHeader">
          <h3>Hi, I'm Grayson.</h3>
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
