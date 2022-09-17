import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../loading/Loading";
import { StyledAnonDashboard } from "./AnonDashboard.styled";
import AnonRightbar from "./AnonRightbar";
import AnonymousCard from "./AnonymousCard";

function AnonDashboard() {
  const [anonPosts, setAnonPosts] = useState();
  const [loading, setLoading] = useState(false);

  const getAnonPosts = () => {
    axios
      .get(
        "https://insta-clone-temidayo.herokuapp.com/api/posts/?page=1&limit=15"
      )
      .then((res) => setAnonPosts(res.data.post))
      .then(() => setLoading(true))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAnonPosts();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <StyledAnonDashboard>
      <>
        <Leftbar />
        <div className="anon-content">
          <Navbar />
          <div className="anon-cards">
            {anonPosts?.map((data) => {
              return <AnonymousCard key={data._id} {...data} />;
            })}
            <div className="infinite-msg">
              <p style={{ textAlign: "center", display: "inline-flex" }}>
                Infinite scroll is disabled for Anonymous Users.
                Login to see more posts.
              </p>
            </div>
          </div>
        </div>

        <AnonRightbar />
      </>
    </StyledAnonDashboard>
  );
}

export default AnonDashboard;
