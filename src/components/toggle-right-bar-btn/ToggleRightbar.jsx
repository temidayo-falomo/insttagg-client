import React from "react";
import { useContext } from "react";
import { FaTh } from "react-icons/fa";
import { AppContext } from "../../helper/Context";
import { StyledToggleRightbar } from "./ToggleRightbar.styled";

function ToggleRightbar() {
  const { toggledRightbar, setToggledRightbar } = useContext(AppContext);
  return (
    <StyledToggleRightbar onClick={() => setToggledRightbar(!toggledRightbar)}>
      <FaTh />
    </StyledToggleRightbar>
  );
}

export default ToggleRightbar;
