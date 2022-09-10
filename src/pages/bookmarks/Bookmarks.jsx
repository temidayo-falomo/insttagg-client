import React, { useContext, useEffect, useState } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { StyledBookmarks } from "./Bookmarks.styled";
import Card from "../../components/card/Card";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";

function Bookmarks() {
  const { userInfo, bookmarks, loading, setIsLoggedIn } =
    useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
      <ToggleRightbar />
    </StyledBookmarks>
  );
}

export default Bookmarks;
