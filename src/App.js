import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import AddPost from "./pages/add-post/AddPost";
import AllUsers from "./pages/all-users/AllUsers";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import UserById from "./pages/user-by-id/UserById";
import PostById from "./pages/post-by-id/PostById";
import StoryPage from "./pages/story-page/StoryPage";
import Messenger from "./pages/messenger/Messenger";
import Logout from "./pages/logout/Logout";
import AnonDashboard from "./pages/anonymous/AnonDashboard";
import LoginIssue from "./pages/login-issue/LoginIssue";

axios.defaults.withCredentials = true;

function App() {
  //Global States to be Provided with Context
  const [userInfo, setUserInfo] = useState();
  const [bookmarks, setBookmarks] = useState();
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(10);
  const [userFollowing, setUserFollowing] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [toggledRightbar, setToggledRightbar] = useState(false);
  const [tokenError, setTokenError] = useState(false);

  //UseNavigate Variable
  let navigate = useNavigate();

  //User API REQUEST.
  const sendUserRequest = async () => {
    const res = await axios
      .get("https://insttagg-server.vercel.app/api/user", {
        withCredentials: true,
      })
      .catch((err) => {
        setTokenError(true);
        navigate("/login");
      });

    const data = await res.data;

    if (data !== undefined) {
      return data;
    } else {
      navigate("/login");
    }
  };

  //GET USER'S BOOKMARKED POSTS
  const getUserBookmarks = async (param) => {
    const res = await axios.get(
      `https://insttagg-server.vercel.app/api/bookmarks/bookmark/${param}`
    );
    setBookmarks(res.data.bookmark);
  };

  //USEEFFECT TO SET THE USER LOGGED IN STATE TO A BOOLEAN

  useEffect(() => {
    if (isLoggedIn) {
      sendUserRequest()
        .then((data) => {
          setUserInfo(data.user);
          setUserFollowing(data.user.following);
          getUserBookmarks(data.user._id);
        })
        .catch((err) => {
          setTokenError(true);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        bookmarks,
        setBookmarks,
        userFollowing,
        isLoggedIn,
        setIsLoggedIn,
        setLoading,
        toggledRightbar,
        setToggledRightbar,
        loading,
        tokenError,
        skip,
        setSkip,
      }}
    >
      <div className="App">
        <GlobalStyle />

        <Routes>
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* User Pages */}
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/:id" element={<UserById />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/post/:id" element={<PostById />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/anonymous" element={<AnonDashboard />} />
          <Route path="/login-issue" element={<LoginIssue />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
