import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import Card from "../card/Card";
import { StyledPosts } from "./Posts.styled";

function Posts() {
  const { generalPosts, bookmarks } = useContext(AppContext);

  return (
    <>
      {bookmarks && (
        <StyledPosts>
          <div className="infinite">
            {generalPosts.map((data) => {
              return (
                <Card key={data._id} {...data} bkmData={bookmarks} />
              );
            })}
          </div>
        </StyledPosts>
      )}
    </>
  );
}

export default Posts;
