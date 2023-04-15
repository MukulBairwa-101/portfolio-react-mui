import React from "react";
import { Drawer } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { GrFormClose } from "react-icons/gr";

import { theme } from "../Theme/Theme";
const headerList = [
  { index: 0, name: "Home", href: "#home" },
  { index: 1, name: "About", href: "#about" },
  { index: 2, name: "Portfolio", href: "#portfolio" },
];
const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="persistent"
      >
        <CloseButton>
          <GrFormClose onClick={() => setIsOpen(false)} />
        </CloseButton>
        <StyledMobileMenu>
          {headerList.map((item, key) => {
            return (
              <a
                key={item.index}
                href={item.href}
                style={{ color: theme.pallete["light"].commonText }}
              >
                {item.name}
              </a>
            );
          })}
          <StyledButton>Get Connect</StyledButton>
        </StyledMobileMenu>
      </Drawer>
    </>
  );
};

export default MobileMenu;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.pallete["light"].commonText,
  color: theme.pallete["light"].lightBg,
  border: "1px solid black",
  "&:hover": {
    backgroundColor: theme.pallete["light"].lightBg,
    color: theme.pallete["light"].commonText,
    border: "1px solid black",
  },
}));

const StyledMobileMenu = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 80,
  padding: "20px",
});

const CloseButton = styled("div")({
  position: "absolute",
  right: "10px",
  top: "5px",
});
