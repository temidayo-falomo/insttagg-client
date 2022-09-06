import React, { useContext, useEffect } from "react";
import AddPostForm from "../../components/add-post-form/AddPostForm";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import { StyledAddPost } from "./AddPost.styled";

function AddPost() {
  const { userInfo, setIsLoggedIn, loading } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <StyledAddPost>{userInfo && <AddPostForm />}</StyledAddPost>;
}

export default AddPost;
