import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [allFriends, setAllFriends] = useState();
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  let navigate = useNavigate();

  const getAllUsers = () => {
    axios
      .get("http://localhost:5600/api/all-users")
      .then((res) => {
        setAllFriends(res.data.users);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleNavigateToFriend = (param) => {
    navigate(`/${param}`);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSearch = (param) => {
    setText(param);
    setShowSearch(true);
    if (param === "") {
      setShowSearch(false);
    }
  };

  return (
    <StyledNavbar>
      <img src="./assets/ig.svg" alt="" />
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {showSearch && (
        <div className="users-dropdown">
          <span>Users</span>

          {allFriends &&
            allFriends
              .filter((val) => {
                if (text === "") {
                  return val;
                } else if (
                  val.firstName.toLowerCase().includes(text.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.lastName.toLowerCase().includes(text.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data, index) => {
                return (
                  <div
                    className="user row gap"
                    key={index}
                    onClick={() => handleNavigateToFriend(data.username)}
                  >
                    <div
                      className="avatar"
                      style={{ backgroundImage: `url(${data.avatar})` }}
                    ></div>
                    <div className="col">
                      <h4>
                        {data.firstName} {data.lastName}
                      </h4>
                      <span>{data.profession}</span>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </StyledNavbar>
  );
}

export default Navbar;
