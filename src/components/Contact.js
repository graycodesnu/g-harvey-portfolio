import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

export default function Contact() {
  // TODO: Define use state for change and submit
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        "service_0agu8bd",
        "template_k7jtwav",
        templateParams,
        "hX2zE410wRCeBkCxO"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
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

  //! Email validation
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }

    setMessage(event.target.value);
  };

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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div>
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  variant="standard"
                  onPointerLeave={pointerLeave}
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                />
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  variant="standard"
                  value={message}
                  onChange={handleEmailChange}
                  helperText={emailError && <alert>{emailError}</alert>}
                  onPointerLeave={pointerLeave}
                  type="email"
                  name="email"
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter your message here."
                  onPointerLeave={pointerLeave}
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                />
                {errors.message && (
                  <span className="errorMessage">Please enter a message</span>
                )}
              </div>
            </div>
            <div>
              <alert>
                {pointer && <alert style={{ color: "red" }}>{pointer}</alert>}
              </alert>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                disabled={disabled}
                type="submit"
              >
                Submit
              </Button>
              <div>
                <ToastContainer closeButton={false}/>
              </div>
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
