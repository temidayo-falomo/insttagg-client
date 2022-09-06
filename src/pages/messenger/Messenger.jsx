import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MessagesHolder from "../../components/messages-holder/MessagesHolder";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import { StyledMessenger } from "./Messenger.styled";
import { StyledMessengerError } from "./MessengerError.styled";

function Messenger() {
  const { userInfo, setIsLoggedIn, loading } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {userInfo && (
        <div style={{ overflow: "hidden" }}>
          {userInfo.following.length !== 0 ? (
            <StyledMessenger>
              <Leftbar />
              {userInfo && <MessagesHolder />}
            </StyledMessenger>
          ) : (
            <StyledMessengerError
            // style={{ backgroundImage: "url(./assets/airplane.gif)" }}
            >
              <div className="col center">
                <h2>Messenger</h2>
                <Link to="/all-users">
                  <button>See Users</button>
                </Link>
                <p>Youu need to follow other users to use this feature.</p>
              </div>
            </StyledMessengerError>
          )}
        </div>
      )}
    </>
  );
}

export default Messenger;
