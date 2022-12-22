import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledLogin } from "./Login.styled";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

function Login() {
  axios.defaults.withCredentials = true;
  const save = window.localStorage.getItem("userInfo");

  const [email, setEmail] = useState(JSON.parse(save));
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setIsLoggedIn, setLoading } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);

  let navigate = useNavigate();

  const userData = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://insttagg-server.vercel.app/api/login", userData, config)
      .then(() => setDisabled(true))
      .then(() => navigate("/"))
      .then(() => window.location.reload())
      .catch((err) => setError(err.response.data.message));
  };

  useEffect(() => {
    setIsLoggedIn(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userInfo", JSON.stringify(email));
  }, [email]);

  return (
    <>
      <StyledLogin onSubmit={handleSubmit}>
        {error && (
          <div className="error-box">
            <p>{error}</p>
          </div>
        )}
        <div className="container">
          <div className="login-right">
            <div className="login-right-centered col">
              <h4>Login</h4>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {!disabled ? (
                <button className="btn">Log In</button>
              ) : (
                <button
                  className="btn"
                  disabled
                  style={{ cursor: "not-allowed" }}
                >
                  Log In
                </button>
              )}
              <p style={{ lineHeight: "25px" }}>
                Don't have an account?{" "}
                <Link to="/sign-up" style={{ display: "inline-block" }}>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div style={{ margin: "2rem auto" }}>
            <Link to="/login-issue" className="iphone">
              Unable to Login?
            </Link>
          </div>
        </div>
      </StyledLogin>
    </>
  );
}

export default Login;
