import React, { useState } from "react";
import { Typography, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../Theme/Theme";

const StyledContainer = styled("Container")({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  margin: "5px",
  padding: "50px",

  [theme.breakpoints.up("md")]: {
    margin: "50px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "50px 0px",
  },
});

theme.typography.h1 = {
  fontSize: "1rem",
  fontFamily: "'Archivo Black', sans-serif",
  color: "#4F687F",
  lineHeight: "80px",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

const Text = styled("p")({
  maxWidth: "600px",
  fontSize: "12px",
  lineHeight: "30px",
  letterSpacing: "1px",
  "@media (min-width:600px)": {
    fontSize: "13px",
  },

  [theme.breakpoints.down("sm")]: {
    margin: "30px 0px",
  },
});

const Image = styled("img")({
  maxWidth: "200px",
  width: "100%",
  borderRadius: "50%",
});

const text = `
  My name is Mukul Kumar Bairwa I'm a frontend engineer . 
  I describe myself as a passionate frontend engineer developing responsive websites.
  I  worked on frontend library and other frontend technologies like  React js  , Redux , HTML , CSS , Javascript,  Bootstrap , SCSS , Material ui  .
`;

const About = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledContainer id="about">
      <Typography variant="h3" style={{ textAlign: "center" }}>
        About
      </Typography>
      <Typography
        variant="p"
        style={{ textAlign: "center", color: "#778D99", margin: "20px" }}
      >
        Know more about me
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 8 }}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Text>{text}</Text>
        <Image src="./aiAvatar2.jpg" alt="image" />
      </Stack>
    </StyledContainer>
  );
};

export default About;
