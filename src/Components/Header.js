import React,{useState} from "react";
import MobileMenu from "./MobileMenu";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { FiMenu } from "react-icons/fi";

const headerList = [
  { index: 0, name: "Home", href: "#home" },
  { index: 1, name: "About", href: "#about" },
  { index: 2, name: "Portfolio", href: "#portfolio" },
];

const StyledMenu = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  "@media (min-width:980px)": {
    display:'flex'
  },
}));

const StyledButton = styled('a')(({ theme }) => ({
  backgroundColor: theme.pallete["light"].commonText,
  color: theme.pallete["light"].lightBg,
  border: "1px solid black",
  cursor:"pointer",
  padding:"8px",
  borderRadius:"5px",
  "&:hover": {
    backgroundColor: theme.pallete["light"].lightBg,
    color: theme.pallete["light"].commonText,
    border: "1px solid black",
  },
}));

const Header = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      sx={{ boxShadow: "none", backgroundColor: "#fff", position: "static" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {/* <StyledLogo src="./logo.png" alt="logo"  /> */}
        <StyledLogoWrapper>
          <StyledSvg>
            <Typography
              sx={{
                color: theme.pallete["light"].light,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
              variant="p"
            >
              Mukul_bairwa
            </Typography>
          </StyledSvg>
        </StyledLogoWrapper>

       


        {/* <Box> */}
          <StyledMenu>
            {headerList.map((item, key) => {
              return (
                <>
                  <a
                    // key={item.index}
                    href={item.href}
                    style={{ color: theme.pallete["light"].commonText }}
                  >
                    {item.name}
                  </a>
                </>
              );
            })}
            <StyledButton href="#contact">Get Connect</StyledButton>
          </StyledMenu>
        {/* </Box> */}
        <div className="mobilemenu">
            <FiMenu  style={{color:"gray"}} onClick={()=>setIsOpen((prev)=>!prev)} />

        </div>
      </Container>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </AppBar>
  );
};

export default Header;

const StyledLogoWrapper = styled("div")({});

const StyledSvg = styled("div")({
  // width:"400px"
  top: 0,
  padding: "10px",
  backgroundColor: "#65A9A6",
  // borderRadius:"40px 60px 8px 35px"
  borderRadius: "52% 48% 44% 56% / 66% 0% 100% 34% ",
});
