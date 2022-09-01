import React, { useContext, useEffect, useState } from "react";
import MessageCard from "../message-card/MessageCard";
import { StyledMessagesHolder } from "./MessagesHolder.styled";
import axios from "axios";
import { AppContext } from "../../helper/Context";
import { FiSend } from "react-icons/fi";
import Loading from "../../pages/loading/Loading";
import { MdRefresh } from "react-icons/md";
import { Link } from "react-router-dom";

function MessagesHolder() {
  const { userInfo, userFollowing } = useContext(AppContext);
  const [textsArr, setTextsArr] = useState();

  const firstMessagerId =
    userFollowing.length !== 0 && userFollowing[0].userToAddToUserId;
  const firstMessageName = userFollowing.length !== 0 && userFollowing[0].name;

  const [clickedMessageId, setClickedMessageId] = useState(firstMessagerId);
  const [clickedMessageName, setClickedMessageName] =
    useState(firstMessageName);

  const [number, setNumber] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, [clickedMessageId, refresh]);

  const getMessages = () => {
    axios
      .get(
        `https://insta-clone-temidayo.herokuapp.com/api/messages/${userInfo._id}/${clickedMessageId}`
      )
      .then((res) => {
        setTextsArr(res.data.userMessage);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleCard = (param, index, param2) => {
    setClickedMessageId(param);
    setNumber(index);
    setClickedMessageName(param2);
  };

  if (!userInfo.following[0].name) {
    return <Loading />;
  }

  const handleMessageSubmit = (e) => {
    const messageData = {
      avatar: userInfo.avatar,
      message: messageText,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
      senderId: userInfo._id,
      receiverId: clickedMessageId,
      senderUserName: userInfo.firstName,
      receiverUsername: firstMessageName,
    };

    setRefresh(!refresh);
    e.preventDefault();

    axios
      .post(
        "https://insta-clone-temidayo.herokuapp.com/api/messages/",
        messageData
      )
      .catch((err) => console.error(err));

    setMessageText("");
  };

  if (loading || !userFollowing) {
    return <Loading />;
  }

  // userToAddToUserId

  // if (userInfo.following.length === 0) {
  //   return <h1>You need to follow someone!</h1>;
  // }

  return (
    <StyledMessagesHolder>
      <div className="left-div">
        <div className="top-bar">
          <h3>{userInfo.firstName}</h3>
        </div>
        <div className="message-cards">
          {userFollowing.map((data, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  handleCard(data.userToAddToUserId, index, data.name)
                }
                className={`normal-card ${index === number && "card-active"}`}
              >
                <MessageCard {...data} />
              </div>
            );
          })}

          <Link to="/all-users" style={{ margin: "0 auto" }}>
            <button>Follow More People</button>
          </Link>
        </div>
      </div>

      <div className="right-div">
        <div className="top-bar">
          <div className="row">To: {clickedMessageName}</div>
        </div>
        <div className="texts-container">
          {textsArr.map((data, index) => {
            return (
              <div
                key={data._id}
                className={data.senderId === userInfo._id ? "left" : "right"}
              >
                <p
                  className={
                    data.senderId === userInfo._id
                      ? "bubble-right"
                      : "bubble-left"
                  }
                >
                  {data.message}
                </p>
                <p style={{ color: "gray" }}>{data.time}</p>
              </div>
            );
          })}
          <div className="refresh-holder" onClick={() => setRefresh(!refresh)}>
            {/* <span className="refresh">
              Refresh
              <MdRefresh />
            </span> */}
          </div>
        </div>
        <div className="bottom-input">
          <form className="row" onSubmit={(e) => handleMessageSubmit(e)}>
            <input
              type="text"
              onKeyDown={getMessages}
              placeholder="Message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              required
            />
            <button>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </StyledMessagesHolder>
  );
}

export default MessagesHolder;