import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FriendCard from "../../components/friend-card/FriendCard";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import { StyledAllUsers } from "./AllUsers.styled";

function AllUsers() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [allFriends, setAllFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = () => {
    axios
      .get("https://insta-clone-temidayo.herokuapp.com/api/all-users")
      .then((res) => {
        setAllFriends(res.data.users);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledAllUsers>
      {userInfo && (
        <>
          <Leftbar />
          <div>
            <Navbar />
            <div style={{ height: "100vh", overflow: "auto" }}>
              <div className="friend-cards">
                {allFriends.map((data) => {
                  return <FriendCard {...data} key={data._id} />;
                })}
              </div>
            </div>
          </div>
          <Rightbar />
        </>
      )}
    </StyledAllUsers>
  );
}

export default AllUsers;
