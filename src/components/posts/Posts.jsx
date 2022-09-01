import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import Card from "../card/Card";
import PostModal from "../postModal/PostModal";
import { StyledPosts } from "./Posts.styled";
import InfiniteScroll from "react-infinite-scroll-component";

function Posts() {
  const [activeModal, setActiveModal] = useState(true);
  const { generalPosts, bookmarks } = useContext(AppContext);

  return (
    <>
      {bookmarks && (
        <StyledPosts>
          <div className="infinite">
            {generalPosts.map((data) => {
              return <Card key={data._id} {...data} bkmData={bookmarks} />;
            })}
          </div>
        </StyledPosts>
      )}
    </>
  );
}

export default Posts;
