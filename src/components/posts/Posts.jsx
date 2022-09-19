import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";
import Loading from "../../pages/loading/Loading";
import Card from "../card/Card";
import { StyledPosts } from "./Posts.styled";

function Posts(props) {
  const { bookmarks, setLoading, skip, loading } = useContext(AppContext);

  const getPosts = async (param) => {
    await axios
      .get(
        `https://insta-clone-temidayo.herokuapp.com/api/posts/?page=1&limit=${param}`
      )
      .then((res) => {
        props.setGeneralPosts(res.data.post);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts(skip);
  }, [skip]);

  if (loading || !props.generalPosts) {
    return <Loading />;
  }

  return (
    <>
      {bookmarks && (
        <StyledPosts>
          <div className="infinite">
            {props.generalPosts.map((data) => {
              return <Card key={data._id} {...data} bkmData={bookmarks} />;
            })}
          </div>
        </StyledPosts>
      )}
    </>
  );
}

export default Posts;
