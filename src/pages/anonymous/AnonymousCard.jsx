import React, { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StyledAnonCard } from "./AnonCard.styled";

function AnonymousCard(props) {
  const [likesArray, setLikesArray] = useState(props.likes);
  let navigate = useNavigate();

  return (
    <StyledAnonCard className="card" onClick={() => navigate("/login")}>
      <div className="row card-top">
        <div className="row">
          <div
            className="user pointer"
            style={{ backgroundImage: `url(${props.avatar})` }}
          ></div>
          <div className="col">
            <div className="orange-hov" style={{ cursor: "pointer" }}>
              <h5>{props.username}</h5>
            </div>
            <span>{props.location}</span>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={props.image} alt="" />
      </div>

      <div className="row btw">
        <ul className="row">
          <li className="like-btn">
            <BsHeart className="pointer" />
          </li>

          <li>
            <div>
              <BiComment className="pointer" />
            </div>
          </li>
          <li>
            <BsShareFill className="pointer" />
          </li>
        </ul>

        <div className="div">
          <FaRegBookmark className="bookmark pointer" />
        </div>
      </div>

      <div className="row btw card-bar">
        {likesArray && (
          <p style={{ marginTop: "10px" }}>
            {likesArray.length === 0
              ? `No Likes Yet!`
              : `Liked by ${likesArray[0].name} and ${
                  likesArray.length - 1
                } others`}
          </p>
        )}
        <p style={{ display: "flex", alignItems: "center" }}>
          {likesArray.slice(0, 3).map((data, index) => {
            return (
              <img
                src={data.avatar}
                alt={data.avatar}
                key={index}
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  marginLeft: "5px",
                  objectFit: "cover",
                }}
              />
            );
          })}
        </p>
      </div>
      <p style={{ margin: "10px 0" }}>{props.postText}</p>
    </StyledAnonCard>
  );
}

export default AnonymousCard;
