import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../Theme/Theme";

import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import { DiCss3, DiBootstrap } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

const StyledContainer = styled("Container")({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
});

const SkillsContainer = styled("Container")({
  backgroundColor: "#1d232f",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  color: "#fff",
  padding: "50px",
  margin: "20px 70px",
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "25px",
    margin: "20px 30px",
    gap: 10,
  },
  "@media  (min-width:600px  ) and (max-width:980px)": {
    padding: "30px",
  },
});

const Icon = styled("div")({
  fontSize: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
});

const IconText = styled("p")({
  fontSize: "13px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
});

const Skill = styled("div")(({ index }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    color:
      index === 0
        ? theme.pallete.common.react
        : index === 1
        ? theme.pallete.common.redux
        : index === 2
        ? theme.pallete.common.javascript
        : index === 3
        ? theme.pallete.common.css3
        : index === 4
        ? theme.pallete.common.bootstrap
        : index === 5
        ? theme.pallete.common.html5
        : index === 6
        ? theme.pallete.common.scss
        : index === 7
        ? theme.pallete.common.tailwindcss
        : "",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0px",
  },
}));

const TexhData = [
  {
    index: 0,
    skill: "React Js",
    icon: <FaReact />,
  },
  {
    index: 1,
    skill: "Redux",
    icon: <TbBrandRedux />,
  },
  {
    index: 2,
    skill: "Javascript",
    icon: <TbBrandJavascript />,
  },
  {
    index: 3,
    skill: "CSS 3",
    icon: <DiCss3 />,
  },
  {
    index: 4,
    skill: "Bootstrap",
    icon: <DiBootstrap />,
  },
  {
    index: 5,
    skill: "HTML 5",
    icon: <TiHtml5 />,
  },
  {
    index: 6,
    skill: "SCSS",
    icon: <BsFiletypeScss />,
  },
  {
    index: 7,
    skill: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];

const Tech = () => {
  return (
    <StyledContainer>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Tech Expertise
      </Typography>
      <Typography
        variant="p"
        style={{ textAlign: "center", color: "#778D99", margin: "20px" }}
      >
        Why choose me ?
      </Typography>

      <SkillsContainer>
        {TexhData.map((item, key) => {
          return (
            <>
              <Skill index={item.index}>
                <Icon>{item.icon}</Icon>

                <IconText>{item.skill}</IconText>
              </Skill>
            </>
          );
        })}
      </SkillsContainer>
    </StyledContainer>
  );
};

export default Tech;
