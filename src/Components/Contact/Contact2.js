import React from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { theme } from "../../Theme/Theme";

import { toast } from "react-toastify";

import emailjs from "emailjs-com";

const Contact2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_jki1r0t",
        "template_tr29vzm",
        formData,
        "6_1vlvPLvUPaP4cRq"
      )
      .then(
        (result) => {
          toast.success(result.text);
        },
        (error) => {
          toast.error(error.text);
        }
      );

    reset();
  };

  return (
    <StyledContainer id="contact">
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Contact
      </Typography>
      <span>Submit the form to get in touch with me </span>
      <StyledForm onSubmit={handleSubmit(sendEmail)}>
        <StyledInput
          type="text"
          {...register("user_name", { required: true })}
          //   name="user_name"
          placeholder="Your name"
        />
        <StyledInput
          type="email"
          {...register("user_email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          //   name="user_email"
          placeholder="Your email"
        />
        <StyledTextarea
          type="text"
          {...register("message", { required: true })}
          //   name="message"
          placeholder="Your Message"
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <Divider />
      <Social>
        <SocialIcon
          href="https://www.linkedin.com/in/mukul-kumar-082a1b166/"
          target="_blank"
        >
          <ImLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/MukulBairwa-101" target="_blank">
          <ImGithub />
        </SocialIcon>
        <SocialIcon href="#">
          <BsTelephoneFill />
        </SocialIcon>
        <span>+91 7727813075</span>
      </Social>
    </StyledContainer>
  );
};

export default Contact2;

const StyledContainer = styled("div")({
  backgroundColor: "#1d232f",
  color: "#fff",
  padding: "40px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 30,
  maxWidth: "50%",
  margin: "50px auto",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
  },
});

const StyledInput = styled("input")({
  padding: "25px 15px",
  backgroundColor: "#00000C",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
});

const StyledTextarea = styled("textarea")({
  padding: "25px 15px",
  backgroundColor: "#00000C",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
});

const StyledButton = styled(Button)({
  backgroundColor: "#16796F",
  color: "#fff",
  maxWidth: "200px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "120px",
  },
});

const Divider = styled("hr")({
  maxWidth: "450px",
  margin: "20px auto",
});

const Social = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: 40,
  alignItems: "center",
});

const SocialIcon = styled("a")({
  fontSize: "30px",
  color: "#16796F",
  "&:hover": {
    color: "#fff",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
});
