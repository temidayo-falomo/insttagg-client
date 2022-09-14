import styled from "styled-components";

export const StyledLogin = styled.form`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll !important;
  position: relative;

  .error-box {
    position: absolute;
    text-align: center;
    border: 2px black solid;
    border-radius: 10px;
    width: 80%;
    max-width: 400px;
    padding: 20px;
    top: 3rem;
    background-color: #fff;
    z-index: 999;
  }

  .container {
    width: 60%;
    max-width: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    min-height: 400px;
    min-width: 300px;
    position: relative;
  }

  .login-right {
    width: 100%;
    padding: 1%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-right-centered {
      gap: 1rem;
      width: 70%;
      margin: auto;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }

    input {
      padding: 10px;
      border: 1px #d0d0d0 solid;
      border-radius: 5px;
    }

    button {
      padding: 15px;
      background-color: #3949ab;
      color: #fff;
      border-radius: 10px;
      font-weight: 600;
    }

    button:hover {
      background-color: transparent;
      color: #3949ab;
      border: 1px #3949ab solid;
    }
  }
`;
