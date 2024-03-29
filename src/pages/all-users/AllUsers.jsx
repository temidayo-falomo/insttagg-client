import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FriendCard from "../../components/friend-card/FriendCard";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import { StyledAllUsers } from "./AllUsers.styled";

function AllUsers() {
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(AppContext);
  const [allFriends, setAllFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = () => {
    axios
      .get("https://insttagg-server.vercel.app/api/all-users")
      .then((res) => {
        setAllFriends(res.data.users);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllUsers();
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledAllUsers>
      {userInfo && (
        <>
          <Leftbar />
          <div style={{ width: "100%", overflow: "auto" }}>
            <Navbar />
            <div
              style={{
                height: "100vh",
                paddingBottom: "5rem",
              }}
            >
              <div className="friend-cards" style={{ overflow: "auto" }}>
                {allFriends.map((data) => {
                  return <FriendCard {...data} key={data._id} />;
                })}
              </div>
            </div>
          </div>
          <Rightbar />
        </>
      )}
      <ToggleRightbar />
    </StyledAllUsers>
  );
}

export default AllUsers;
