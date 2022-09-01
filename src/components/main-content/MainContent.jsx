import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import Navbar from "../navbar/Navbar";
import Posts from "../posts/Posts";
import { StyledMainContent } from "./MainContent.styled";

function MainContent() {
  const { handleScroll } = useContext(AppContext);
  return (
    <StyledMainContent onScroll={handleScroll}>
      <Navbar />
      <Posts />
    </StyledMainContent>
  );
}

export default MainContent;
