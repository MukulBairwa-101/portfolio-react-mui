import React from "react";
import { Container, Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../Theme/Theme";

const StyledContainer = styled("Container")({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  margin: "5px",
  padding: "40px",

  [theme.breakpoints.up("md")]: {
    margin: "50px 20px",
  },
});

// const StyledContainer = styled("div")({
//   color: "#fff",
//   padding: "0px",
//   display: "flex",
//   justifyContent: "space-around",
//   flexDirection: "column",

//   [theme.breakpoints.down("sm")]: {
//     padding: "20px",
//   },
// });

const PortfolioCardWrapper = styled("Box")({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
  // background:"url('/wave3.png')",
  // backgroundRepeat: 'no-repeat',

  [theme.breakpoints.up("md")]: {
    margin: "80px 0px",
  },

});

const WorkCard = styled("div")({
  margin: "20px 0px",
  position: "relative",
  borderRadius: "10px",
  maxWidth: "300px",
  "&:hover": {
    boxShadow:'1px solid gray',
  },
});

const Workimg = styled("img")({
  maxWidth: "300px",
  width: "100%",
  height: "220px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "10px",
  cursor: "pointer",
    "&:hover": {
    opacity: ".9",
  },
});

const WorkText = styled("h3")({
  textAlign: "center",
});
const WorkButton = styled("a")({
  color: "#fff",
  textAlign: "center",
  display: "none",
  position: "absolute",
  top: 100,
  left: 100,
  fontSize: "12px",
  backgroundColor: "#4F687F",
  padding: "10px 30px",
  borderRadius: "10px",
});

const PortfolioData = [
  {
    index: 0,
    title: "Getmail",
    description:
      "' MERN ' mailbox. ",
    img: "./getmail.png",
    link: "https://getmail.netlify.app/",
    btnActive: false,
  },
  {
    index: 1,
    title: "QTBlogs",
    description:
      "QTBlogs is a Blog platform for writing and sharing your thoughts with the everyone out there . ",
    img: "./qtblogs.png",
    link: "https://qtblogs.netlify.app/",
    btnActive: false,
  },
  {
    index: 2,
    title: "NetflixShows",
    description: "NetflixShows is a movie and shows watch website . ",
    img: "./netflixshows.png",
    link: "https://netflixshows-8310.netlify.app/",
    btnActive: false,
  },
  {
    index: 3,
    title: "Shopmart",
    description: "An E-Commerce platform",
    img: "./shopmart.png",
    link: "https://shopmartv1.netlify.app/",
    btnActive: false,
  },
  {
    index: 4,
    title: "Spot On",
    description: "React infinite scrolling ",
    img: "./spoton2.png",
    link: "https://spot-on-moment.netlify.app/",
    btnActive: false,
  },
  {
    index: 5,
    title: "Age calculator frontendmentor.io challenge ",
    description: "Javascript age calculator build for frontendmentor.io challenge ",
    img: "./agecalculator.png",
    link: "https://keen-shortbread-211b38-agecalculator.netlify.app/",
    btnActive: false,
  },
];

const Portfolio = () => {
  const [show, setShow] = React.useState(false);
  const handleMouseOver = (data) => {
    data.btnActive = true;
    setShow(true);
  };
  const handleMouseOut = (data) => {
    data.btnActive = false;
    setShow(false);
  };

  return (
    <StyledContainer id="portfolio">
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Portfolio
      </Typography>
      <Typography
        variant="p"
        style={{ textAlign: "center", color: "#778D99", margin: "20px" }}
      >
        check out some of my work 
      </Typography>
      {/* <img src="/wave.png" /> */}

      <PortfolioCardWrapper>
        {PortfolioData.map((data, key) => {
          return (
            <>
              <WorkCard>
                <Workimg
                  src={data.img}
                  alt="workimage"
                  onMouseOver={() => handleMouseOver(data)}
                  onMouseOut={() => handleMouseOut(data)}
                />
                <WorkText>{data.title}</WorkText>
                <WorkButton
                  href={data.link}
                  onMouseOver={() => handleMouseOver(data)}
                  style={{ display: show && data.btnActive ? "block" : "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  go to site
                </WorkButton>
              </WorkCard>
            </>
          );
        })}
      </PortfolioCardWrapper>
    </StyledContainer>
  );
};

export default Portfolio;
