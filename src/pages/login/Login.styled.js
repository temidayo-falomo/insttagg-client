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
    max-width: 450px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-height: 420px;
    min-width: 300px;
    position: relative;
    padding-top: 2rem;

    .iphone {
      padding: 10px 15px;
      border-radius: 10px;
      background-color: green;
      color: #fff;
      position: relative;
      
      :hover {
        background-color: transparent;
        border: 1px green solid;
        color: green;
      }
    }
  }

  .login-right {
    width: 100%;
    padding: 1%;
    padding-bottom: 0;
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
      margin-bottom: 2rem;
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
