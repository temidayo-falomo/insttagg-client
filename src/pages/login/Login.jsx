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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { userInfo, setIsLoggedIn, setLoading } = useContext(AppContext);

  let navigate = useNavigate();

  const userData = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://insta-clone-temidayo.herokuapp.com/api/login",
        userData,
        config
      )
      .then(() => navigate("/"))
      .then(() => window.location.reload())
      .catch((err) => setError(err.response.data.message));
  };

  useEffect(() => {
    setIsLoggedIn(false);
    setLoading(false);
  }, []);

  return (
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
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="name"
              // name="password"
              // autoComplete="on"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button">Log in</button>
            <p>
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
