import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledSignUp } from "./SignUp.styled";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

function SignUp() {
  axios.defaults.withCredentials = false;
  const save = window.localStorage.getItem("userInfo");

  const [email, setEmail] = useState(JSON.parse(save));
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState("https://i.stack.imgur.com/frlIf.png");
  const { userInfo } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);

  const [error, setError] = useState();

  const userData = {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
    profession: "Regular Person",
    avatar: avatar,
    bio: "I am a mysterious person who doesn't want to say anything yet",
    username: username.replace(/\s/g, " ").toLowerCase(),
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://insttagg-server.vercel.app/api/signup", userData)
      .then(() => setDisabled(true))
      .then(() =>
        axios
          .post(
            "https://insttagg-server.vercel.app/api/login",
            {
              email: email,
              password: password,
            },
            config
          )
          .then(() => navigate("/"))
          .then(() => window.location.reload())
          .catch((err) => setError(err.response.data.message))
      )
      .catch((err) => setError(err.response.data.message));
  };

  const handleGetRandomWord = () => {
    axios
      .get("https://random-word-api.herokuapp.com/word")
      .then((res) => setEmail(res.data[0] + "@fake.com"))
      .catch((err) => console.error(err));
  };

  const handleGetRandomPassword = () => {};

  useEffect(() => {
    window.localStorage.setItem("userInfo", JSON.stringify(email));
  }, [email]);

  return (
    <StyledSignUp onSubmit={handleSubmit}>
      {error && (
        <div className="error-box">
          <p>{error}</p>
        </div>
      )}
      <div className="container">
        <div className="login-right">
          <div className="login-right-centered col">
            <h4>Sign Up</h4>

            <div className="row">
              <input
                type="name"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                type="name"
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>

            <input
              style={{ textTransform: "lowercase" }}
              placeholder="Create Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <div className="holder">
              <span onClick={handleGetRandomWord}>Use Random Email?</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ textTransform: "lowercase" }}
                required
              />
            </div>

            <div className="holder">
              <span onClick={handleGetRandomPassword}>Random Password?</span>
              <input
                type="password"
                name="password"
                autoComplete="on"
                placeholder="create password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ textTransform: "-moz-initial" }}
                required
              />
            </div>
            {!disabled ? (
              <button className="btn">Sign Up</button>
            ) : (
              <button
                className="btn"
                disabled
                style={{ cursor: "not-allowed" }}
              >
                Sign Up
              </button>
            )}
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </StyledSignUp>
  );
}

export default SignUp;
