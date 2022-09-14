import styled from "styled-components";

export const StyledSinglePost = styled.div`
  width: 80%;
  height: 90vh;
  margin: auto;
  display: flex;
  margin-top: 2rem;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
  overflow: hidden;

  .post-left {
    height: 100%;
    width: 60%;
    background-color: white;
    border-right: 1px gainsboro solid;
  }

  .image {
    min-height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: auto;
  }

  .post-right {
    height: 100%;
    width: 40%;
    position: relative;

    button {
      width: 150px;
      padding: 10px;
      border-radius: 10px;
      background-color: #1982fc;
      color: #fff;
    }

    span {
      color: gainsboro;
      margin-top: 0.5rem;
    }

    .top {
      border-bottom: 1px gainsboro solid;
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 0;
      z-index: 999;
      background-color: #fff;
    }

    .avt {
      width: 40px;
      height: 40px;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      overflow: hidden;
      border: 2px black solid;
    }

    .row {
      width: 100%;
      gap: 0.5rem;
    }

    .users-comments {
      margin-top: 5rem;
      width: 100%;
      padding: 10px 20px;
      overflow: auto;
      padding-bottom: 2rem;
    }

    .comment-input {
      /* position: absolute; */
      left: 0;
      right: 0;
      bottom: 1rem;
      width: 100%;
      height: 150px;
      padding: 15px 15px;
      z-index: 99;
      border-top: 1px gainsboro solid;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #fff;
    }

    textarea {
      width: 100%;
      height: 40px;
      padding: 5px;
      font-family: "Lato";
      margin-top: 0.5rem;
      border: none;
      outline: none;
    }
  }

  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 90vh;
    overflow: auto;

    form {
      padding-bottom: 1.5rem !important;
    }

    .comment-input {
      position: static !important;
    }

    .users-comments {
      overflow: hidden !important;

      .margin-btm {
        margin: 1rem !important;
      }

      ::-webkit-scrollbar {
        width: 0em;
      }
    }

    .post-left {
      min-height: 50vh;
      width: 100%;

      .image {
        width: 100%;
        background-size: cover;
      }
    }

    .post-right {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;
