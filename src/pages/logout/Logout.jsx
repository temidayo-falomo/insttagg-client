import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import { StyledLogout } from "./Logout.styled";

function Logout() {
  return (
    <StyledLogout>
      <Leftbar />
      <div className="div">
        <div className="logout-box">
          <button className="button-71">Logout</button>
        </div>
      </div>
    </StyledLogout>
  );
}

export default Logout;
