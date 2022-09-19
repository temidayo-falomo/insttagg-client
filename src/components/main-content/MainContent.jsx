import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import Navbar from "../navbar/Navbar";
import Posts from "../posts/Posts";
import { StyledMainContent } from "./MainContent.styled";

function MainContent() {
  const { setSkip } = useContext(AppContext);
  const [generalPosts, setGeneralPosts] = useState();

  //Function to handle infinite scroll
  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(generalPosts.length + 3);
    }
  };

  return (
    <StyledMainContent onScroll={handleScroll}>
      <Navbar />
      <Posts generalPosts={generalPosts} setGeneralPosts={setGeneralPosts} />
    </StyledMainContent>
  );
}

export default MainContent;
