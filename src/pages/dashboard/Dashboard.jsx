import React, { useContext, useEffect } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import MainContent from "../../components/main-content/MainContent";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledDashboard } from "./Dashboard.styled";
import { Link, useNavigate } from "react-router-dom";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";

function Dashboard() {
  const { userInfo, bookmarks, setIsLoggedIn } = useContext(AppContext);

  let navigate = useNavigate();

  // useEffect(() => {
  //   // if (!userInfo) {
  //   //   navigate("/login");
  //   // }
  // }, []);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <StyledDashboard>
      {userInfo && (
        <>
          <Leftbar />
          <MainContent bookmarks={bookmarks} />
          <Rightbar />
        </>
      )}
      <ToggleRightbar />
    </StyledDashboard>
  );
}

export default Dashboard;
