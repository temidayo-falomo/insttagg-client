import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import AddPost from "./pages/add-post/AddPost";
import AllUsers from "./pages/all-users/AllUsers";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import UserById from "./pages/user-by-id/UserById";
import Loading from "./pages/loading/Loading";
import PostById from "./pages/post-by-id/PostById";
import StoryPage from "./pages/story-page/StoryPage";
import Messenger from "./pages/messenger/Messenger";
import Logout from "./pages/logout/Logout";
import AnonDashboard from "./pages/anonymous/AnonDashboard";

axios.defaults.withCredentials = true;

function App() {
  const [userInfo, setUserInfo] = useState();
  const [generalPosts, setGeneralPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState();
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(10);
  const [theme, setTheme] = useState("dark");
  const [userFollowing, setUserFollowing] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [toggledRightbar, setToggledRightbar] = useState(true);
  const [tokenError, setTokenError] = useState(false);

  const sendUserRequest = async () => {
    const res = await axios
      .get("https://insta-clone-temidayo.herokuapp.com/api/user", {
        withCredentials: true,
      })
      .catch((err) => setTokenError(true));

    const data = await res.data;
    return data;
  };

  const getPosts = async (param) => {
    await axios
      .get(
        `https://insta-clone-temidayo.herokuapp.com/api/posts/?page=1&limit=${param}`
      )
      .then((res) => {
        setGeneralPosts(res.data.post);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getUserBookmarks = async (param) => {
    const res = await axios.get(
      `https://insta-clone-temidayo.herokuapp.com/api/bookmarks/bookmark/${param}`
    );
    setBookmarks(res.data.bookmark);
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(generalPosts.length + 3);
      console.log(skip);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !tokenError) {
      sendUserRequest()
        .then((data) => {
          setUserInfo(data.user);
          setUserFollowing(data.user.following);
          getUserBookmarks(data.user._id);
        })
        .catch((err) => setTokenError(true));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getPosts(skip);
  }, [skip]);

  // if (loading) {
  //   return <Loading />;
  // }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (window.innerWidth > 1030) {
      setToggledRightbar(false);
    }
  }, []);

  console.log(tokenError);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        generalPosts,
        setGeneralPosts,
        bookmarks,
        setBookmarks,
        getPosts,
        handleScroll,
        userFollowing,
        isLoggedIn,
        setIsLoggedIn,
        setLoading,
        toggledRightbar,
        setToggledRightbar,
        loading,
        tokenError
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
        </Routes>
        {tokenError && (
          <h1 style={{ margin: "auto" }}>
            There appears to be issuse with signing you in. Please try login
            again
          </h1>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
