import React, { useContext } from "react";
import AddPostForm from "../../components/add-post-form/AddPostForm";
import { AppContext } from "../../helper/Context";
import { StyledAddPost } from "./AddPost.styled";

function AddPost() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  return (
    <StyledAddPost>
      {userInfo && <AddPostForm />}
    </StyledAddPost>
  );
}

export default AddPost;
