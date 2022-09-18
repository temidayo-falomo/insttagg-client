import React, { useContext, useEffect, useState } from "react";
import MessageCard from "../message-card/MessageCard";
import { StyledMessagesHolder } from "./MessagesHolder.styled";
import axios from "axios";
import { AppContext } from "../../helper/Context";
import { FiSend } from "react-icons/fi";
import Loading from "../../pages/loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { TbSend } from "react-icons/tb";

function MessagesHolder() {
  
  //States & Context

  const { userInfo, userFollowing } = useContext(AppContext);
  const [textsArr, setTextsArr] = useState();

  const firstMessagerId =
    userFollowing.length !== 0 && userFollowing[0].userToAddToUserId;
  const firstMessageName = userFollowing.length !== 0 && userFollowing[0].name;

  const [clickedMessageId, setClickedMessageId] = useState(firstMessagerId);
  const [clickedMessageName, setClickedMessageName] =
    useState(firstMessageName);

  const [number, setNumber] = useState("disp");
  const [refresh, setRefresh] = useState(false);

  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(true);
  const [showBox, setShowBox] = useState(false);

  let navigate = useNavigate();

  // Function to call Messages

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

  //Get Messages On Render

  useEffect(() => {
    getMessages();
  }, [clickedMessageId, refresh]);

  //Get Card Parameters Onclick

  const handleCard = (param, index, param2) => {
    setClickedMessageId(param);
    setNumber(index);
    setClickedMessageName(param2);
    setShowBox(true);
  };

  //Loading Screen

  if (!userInfo.following[0].name) {
    return <Loading />;
  }

  //Add Message

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    var time = new Date();

    let realTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const messageData = {
      avatar: userInfo.avatar,
      message: messageText,
      time: realTime,
      senderId: userInfo._id,
      receiverId: clickedMessageId,
      senderUserName: userInfo.firstName,
      receiverUsername: firstMessageName,
    };

    // setRefresh(!refresh);

    axios
      .post(
        "https://insta-clone-temidayo.herokuapp.com/api/messages/",
        messageData
      )
      .catch((err) => console.error(err));

    setMessageText("");
    setTextsArr([...textsArr, messageData]);
  };

  //Loading Screen

  if (loading || !userFollowing) {
    return <Loading />;
  }

  //Navigation

  const handleNavigateTo = () => {
    navigate(`/`);
  };

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

      <div className={showBox ? "right-div" : "none"}>
        <div className="top-bar row btw">
          <div className="row center">
            To:{" "}
            <h4 className="pointer" onClick={handleNavigateTo}>
              {" "}
              {clickedMessageName}
            </h4>
          </div>
          <ImCancelCircle
            className="cancel"
            onClick={() => setShowBox(false)}
          />
        </div>
        <div className="texts-container">
          {textsArr.map((data, index) => {
            return (
              <div
                key={index}
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

      {!number ||
        (number === "disp" && (
          <div className="messages-info">
            <div className="circle">
              <TbSend className="plane-fig" />
            </div>
            <h3>Your Messages</h3>
            <p>Send private photos and messages to a friend or group.</p>
          </div>
        ))}
    </StyledMessagesHolder>
  );
}

export default MessagesHolder;
