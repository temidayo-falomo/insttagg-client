import React, { useContext, useEffect } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import MainContent from "../../components/main-content/MainContent";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledDashboard } from "./Dashboard.styled";
import { Link, useNavigate } from "react-router-dom";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";
import Loading from "../loading/Loading";

function Dashboard() {
  const { userInfo, bookmarks, setIsLoggedIn, loading, tokenError } =
    useContext(AppContext);

  let navigate = useNavigate();

  // useEffect(() => {
  //    if (!userInfo) {
  //    navigate("/login");
  //   }
  // }, []);

  useEffect(() => {
    if (tokenError) {
      navigate("/login");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [tokenError]);

  if (loading) {
    return <Loading />;
  }

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
