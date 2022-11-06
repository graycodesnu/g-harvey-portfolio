import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
  const [myForm, setMyForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleForm = (event) => {
    console.log(event.target.value);
    setMyForm(event.target.value);
  };

  //! Email validation
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  //! Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMyForm("");
  };

  //! Pointer leave
  const [pointer, pointerSetError] = useState("");

  function pointerLeave(event) {
    if (!event.target.value) {
      pointerSetError("*All fields are required.");
    } else {
      pointer("");
    }
  }

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
                onChange={handleChange}
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
//   onChange={handleChange}
// />
// <input placeholder="message" type="text" />
// <button type="submit">Submit</button>
// </form>

// {error && <alert>{error}</alert>}
