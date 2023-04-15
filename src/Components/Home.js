import React from "react";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../data/Resume.pdf";
import { theme } from "../Theme/Theme";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.pallete["light"].commonText,
  color: theme.pallete["light"].lightBg,
  border: "1px solid #9AB19A",
  margin: "30px 0px",
  "&:hover": {
    backgroundColor: theme.pallete["light"].lightBg,
    color: theme.pallete["light"].commonText,
    border: "1px solid black",
  },
}));

theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.h5 = {
  fontSize: ".8rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    lineHeight: "50px",
    letterSpacing: "1px",
  },
};

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

const StyledImage = styled("img")({
  maxWidth: "220px",
  width: "100%",
  borderRadius: "50px 20px 80px 20px",
  top: 20,
  left: 100,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    left: 50,
    maxWidth: "130px",
  },

  "@media  (min-width:481px  ) and (max-width:760px)": {
    maxWidth: "140px",
    left: 60,
  },
  "@media  (min-width:761px  ) and (max-width:980px)": {
    maxWidth: "180px",
    left: 80,
  },
});

const ProfileDiv = styled("div")({
  position: "relative",
});

const StyledContainer = styled("Container")({
  display: "flex",
  justifyContent: "space-around",
  margin: "30px 30px 80px ",

  [theme.breakpoints.down("sm")]: {
    margin: "30px 10px  ",
  },
});

const Shape = styled("div")({
  position: "absolute",
  zIndex: -1,
});

const TextDiv = styled("div")({
  margin: "50px 0px  30px 0px",
});

const Home = () => {
  return (
    <StyledContainer id="home">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 8 }}
      >
        <TextDiv>
          <Typography variant="h3">
            Hi i'm <span style={{ color: "#778D99" }}>Mukul</span>
          </Typography>
          <Typography variant="h1">Frontend Engineer</Typography>
          <Typography variant="h5">I enjoy developing tech websites</Typography>
          <a href={resume} download="Resume">
            <StyledButton startIcon={<DownloadIcon />}>
              Download Resume
            </StyledButton>
          </a>
        </TextDiv>
        <ProfileDiv>
          <Shape>
            <svg
              style={{ width: "450px" }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#647C90"
                d="M44.5,-63.3C57.9,-60.6,69.3,-48.7,75.1,-34.7C81,-20.6,81.3,-4.4,76,8.7C70.7,21.9,59.6,32,50.3,44.5C40.9,57.1,33.3,72.2,21.4,78.1C9.4,84.1,-6.7,81,-21.4,75.5C-36,69.9,-49.2,62,-56.6,50.6C-64.1,39.2,-65.9,24.5,-70.2,8.8C-74.5,-6.9,-81.2,-23.5,-74.6,-32.4C-68,-41.3,-48,-42.5,-33.4,-44.6C-18.7,-46.8,-9.4,-49.8,3.1,-54.6C15.5,-59.4,31.1,-66,44.5,-63.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </Shape>

          <StyledImage src="./rimage.png" alt="profile" />
        </ProfileDiv>
      </Stack>
    </StyledContainer>
  );
};

export default Home;
