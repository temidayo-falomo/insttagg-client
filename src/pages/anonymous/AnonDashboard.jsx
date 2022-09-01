import React, { useContext } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import MainContent from "../../components/main-content/MainContent";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledAnonDashboard } from "./AnonDashboard.styled";
import AnonRightbar from "./AnonRightbar";

function AnonDashboard() {

  return (
    <StyledAnonDashboard>
        <>
          <Leftbar />
          <div>
            <Navbar />
          </div>
          <AnonRightbar />
        </>
    </StyledAnonDashboard>
  );
}

export default AnonDashboard;
