import React from "react";
import { StyledPostModal } from "./PostModal.styled";

function PostModal() {
  return (
    <StyledPostModal>
      <div className="image">
        <img src="./assets/view.svg" alt="" />
      </div>

      <div className="row">
        <div className="row">
            <span>Heart</span>
        </div>
      </div>
    </StyledPostModal>
  );
}

export default PostModal;
