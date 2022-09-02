import React, { useContext, useEffect, useState } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { StyledBookmarks } from "./Bookmarks.styled";
import Card from "../../components/card/Card";
import { AppContext } from "../../helper/Context";

function Bookmarks() {
  const { userInfo, bookmarks } = useContext(AppContext);

  return (
    <StyledBookmarks>
      <Leftbar />
      <>
        {userInfo && bookmarks && (
          <div style={{ width: "100%", overflow: "auto" }}>
            <Navbar />
            <div className="bookmarks">
              {bookmarks.map((data, index) => {
                return <Card {...data} key={index} />;
              })}
              {bookmarks.length === 0 && (
                <h3 style={{ margin: "auto" }}>
                  You don't have any Post saved Here !
                </h3>
              )}
            </div>
          </div>
        )}
      </>
      <Rightbar />
    </StyledBookmarks>
  );
}

export default Bookmarks;
