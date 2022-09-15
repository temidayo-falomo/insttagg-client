import styled from "styled-components";

export const StyledSignUp = styled.form`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll !important;
  position: relative;

  input {
    width: 100%;
  }

  .error-box {
    position: absolute;
    text-align: center;
    border: 2px black solid;
    border-radius: 10px;
    width: 400px;
    padding: 20px;
    top: 2rem;
  }

  .logo {
    width: 200px;
  }

  .float {
    position: absolute;
    left: -10%;
    bottom: 0;
    width: 300px;
    z-index: 9999;
  }

  .float-2 {
    position: absolute;
    right: -10%;
    top: 2rem;
    width: 300px;
    z-index: 9999;
  }

  .container {
    width: 60%;
    max-width: 450px;
    height: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    min-height: 550px;
    min-width: 340px;
    position: relative;
    overflow: auto;
  }

  .login-left {
    background-color: #3949ab;
    padding: 2%;
    width: 50%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    h2 {
      font-size: 2rem;
    }

    .astro {
      width: 400px;
    }

    .login-left-center {
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      gap: 1rem;
      color: #fff;
    }
  }

  .login-right {
    width: 100%;
    padding: 1%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .row {
      justify-content: space-between;
      gap: 1rem;
    }

    .holder {
      width: 100%;
      position: relative;

      span {
        position: absolute;
        right: .5rem;
        padding: 5px 8px;
        background-color: #3949ab;
        color: #fff;
        font-size: 0.7rem;
        border-radius: 10px;
        cursor: pointer;
      }
    }

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
      padding: 15px 10px;
      border: 1px #d0d0d0 solid;
      border-radius: 5px;
    }

    .btn {
      padding: 15px;
      background-color: #3949ab;
      color: #fff;
      border-radius: 10px;
      font-weight: 600;
    }

    .btn:hover {
      background-color: transparent;
      color: #3949ab;
      border: 1px #3949ab solid;
    }
  }
`;
