import React, { useState } from "react";
import { StyledStories } from "./Stories.styled";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function Stories() {
  const [randomPics, setRandomPics] = useState([]);

  return (
    <StyledStories>
      <h3>Your Stories</h3>
      <div className="row">
        <div className="col">
          <Link className="circle" to="/add-post">
            <h2>+</h2>
          </Link>
          <span>Add Story</span>
        </div>
      </div>

      <Link to="/add-post">
        <button className="button-86">
          Create Post &nbsp; <BsPlusLg />
        </button>
      </Link>
    </StyledStories>
  );
}

export default Stories;
