import { Button, FormControl, Grid, TextField, styled } from "@mui/material";
import sectionIcon from "../images/icons/send filled.png";
import themeColors from "../theme-colors";
import { useState } from "react";

const CustomTextField = styled(TextField)({
  "&.MuiTextField-root": {
    marginBottom: "16px",
  },
  "& label.Mui-focused": {
    color: themeColors.textGrey,
  },
  "& .MuiFormHelperText-root": {
    fontSize: "0.8rem",
  },
  "& .MuiOutlinedInput-root": {
    marginBottom: 0,
    "& fieldset": {
      borderColor: themeColors.textGrey,
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      // borderColor: themeColors.textGrey,
    },
    "&.Mui-focused fieldset": {
      borderColor: themeColors.textGrey,
    },
  },
});

const ContactSection = () => {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "Please enter your name",
    },
    email: {
      value: "",
      error: false,
      errorMessage: "Email should be in the format abc@example.com",
    },
    message: {
      value: "",
      error: false,
      errorMessage: "Please enter your message",
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormValues({
      ...formValues,
      [id]: {
        ...formValues[id],
        value: value,
        error: false,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("the values are now " + JSON.stringify(formValues));

    let isAllValid = true;
    let newFormValues = { ...formValues };

    for (const key in formValues) {
      const currentValue = formValues[key].value;

      switch (key) {
        case "name":
        case "message":
          if (!currentValue || currentValue === "") {
            newFormValues = {
              ...newFormValues,
              [key]: {
                ...newFormValues[key],
                error: true,
              },
            };
            isAllValid = false;
          }
          break;
        case "email":
          var validEmailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (!currentValue.match(validEmailRegex)) {
            newFormValues = {
              ...newFormValues,
              [key]: {
                ...newFormValues[key],
                error: true,
              },
            };
            isAllValid = false;
          }
          break;
        default:
          console.log("invalid field??");
      }
    }

    setFormValues(newFormValues);

    if (isAllValid) {
      fetch("https://formsubmit.co/ajax/e2d41fd1578165051b657e0b88151f3b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formValues.name.value,
          email: formValues.email.value,
          message: formValues.message.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setFormValues({
            name: {
              ...formValues["name"],
              value: "",
              error: false,
            },
            email: {
              ...formValues.email,
              value: "",
              error: false,
            },
            message: {
              ...formValues.message,
              value: "",
              error: false,
            },
          });

          // console.log("reset form values are " + JSON.stringify(formValues));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Grid container justifyContent="center" marginTop="56px">
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div class="section-header" style={{ marginBottom: "32px" }}>
              <img src={sectionIcon} />
              <p>Contact</p>
            </div>
          </Grid>

          <FormControl fullWidth>
            <CustomTextField
              id="name"
              label="Name"
              onInput={handleChange}
              value={formValues.name.value}
              error={formValues.name.error}
              helperText={formValues.name.error && formValues.name.errorMessage}
            />
            <CustomTextField
              id="email"
              label="Email"
              onInput={handleChange}
              value={formValues.email.value}
              error={formValues.email.error}
              helperText={
                formValues.email.error && formValues.email.errorMessage
              }
            />
            <CustomTextField
              id="message"
              label="Message"
              multiline
              minRows={10}
              onInput={handleChange}
              value={formValues.message.value}
              error={formValues.message.error}
              helperText={
                formValues.message.error && formValues.message.errorMessage
              }
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
