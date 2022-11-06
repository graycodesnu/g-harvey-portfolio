import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {

  // TODO: Define use state for change and submit 

  //! Pointer leave
  const [pointer, pointerSetError] = useState("");

  function pointerLeave(event) {
    if (!event.target.value) {
      pointerSetError("*All fields are required.");
    } else {
      pointer("");
    }
  }

  //! Email validation
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  // TODO: Handle input



  // TODO: Submit

  //! ************** RETURN **************
  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div>
              <TextField
                required
                id="standard-required"
                label="Name"
                variant="standard"
                onPointerLeave={pointerLeave}
              />

              <TextField
                required
                id="standard-required"
                label="Email"
                variant="standard"
                value={message}
                onChange={handleEmailChange}
                helperText={error && <alert>{error}</alert>}
                onPointerLeave={pointerLeave}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                placeholder="Enter your message here."
                onPointerLeave={pointerLeave}
              />
            </div>
            <div>
              <alert>
                {pointer && <alert style={{ color: "red" }}>{pointer}</alert>}
              </alert>
            </div>
            <div>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

// <input placeholder="name" type="text" />
// <input
//   placeholder="email"
//   id="message"
//   name="message"
//   value={message}
//   onChange={handleEmailChange}
// />
// <input placeholder="message" type="text" />
// <button type="submit">Submit</button>
// </form>

// {error && <alert>{error}</alert>}
