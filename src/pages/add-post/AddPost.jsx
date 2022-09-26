import React, { useContext, useEffect } from "react";
import AddPostForm from "../../components/add-post-form/AddPostForm";
import { AppContext } from "../../helper/Context";
import { StyledAddPost } from "./AddPost.styled";

function AddPost() {
  const { userInfo, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return <StyledAddPost>{userInfo && <AddPostForm />}</StyledAddPost>;
}

export default AddPost;
