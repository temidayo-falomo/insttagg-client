import styled from "styled-components";

export const StyledMessagesHolder = styled.div`
  display: grid;
  grid-template-columns: 550px auto;
  border: 1px gainsboro solid;
  height: 80vh;
  width: 80%;
  margin: 6rem auto;
  overflow: hidden;
  border-radius: 20px;

  .messages-info {
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 0 20px;

    .circle {
      border: 1px #262626 solid;
      padding: 20px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      font-size: 2.5rem;
      display: grid;
      place-content: center;
      font-weight: 400;

      .plane-fig {
        color: #262626 !important;
        font-weight: 400;
      }
    }
  }

  .refresh-holder {
    color: #42cc47;
    position: sticky;
    left: 50%;
    right: 50%;
    bottom: 2rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .refresh {
      display: flex;
      align-items: center;
    }
  }

  .right {
    margin-right: auto;
  }

  .left {
    margin-left: auto;
  }

  .left-div {
    border-right: 1px gainsboro solid;

    .top-bar {
      height: 80px;
      border-bottom: 1px gainsboro solid;
      display: grid;
      place-content: center;
    }

    .message-cards {
      height: 70vh;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0;
      overflow: scroll;

      button {
        padding: 15px;
        margin: 0 auto;
        width: 220px;
        border-radius: 15px;
        font-weight: 600;
        background-color: #fff;
        color: #000;
        border: 1px black solid;
      }

      button:hover {
        background-color: #000;
        color: #fff;
      }
    }

    .normal-card {
      padding: 10px;
      height: 90px;
      margin: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;

      border: 1px gainsboro solid;
      cursor: pointer;
    }

    .card-active {
      background-color: #1982fc;
      border: 1px gainsboro solid;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      color: #fff;
    }
  }

  .right-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .top-bar {
      height: 80px;
      border-bottom: 1px gainsboro solid;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 4%;

      .cancel {
        font-size: 1.5rem;
        fill: orange;
        display: none;
      }
    }

    .texts-container {
      height: 68vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
      padding: 10px 20px;
      position: relative;
      overflow: scroll;
      padding-bottom: 50px;
    }

    .bottom-input {
      border: 1px gainsboro solid;
      /* min-height: 80px; */
      height: 50px;
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;

      .row {
        width: 100%;
        height: 100%;
        margin: auto;
      }

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        text-transform: capitalize;
        padding: 0 10px;
      }

      button {
        width: 100px;
        font-size: 1.5rem;
        display: grid;
        place-content: center;
      }
    }

    .bubble-left {
      padding: 20px;
      border-radius: 30px;
      background-color: gainsboro;
      color: #000;
    }

    .bubble-right {
      padding: 20px;
      border-radius: 30px;
      background-color: #1982fc;
      color: #fff;
    }
  }

  @media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    min-width: 300px;

    .cancel {
      display: block !important;
    }

    .left-div {
      min-width: 300px;

      p {
        font-size: 0.8rem;
      }
    }

    .texts-container {
      height: 100%;
    }

    .right-div {
      border: 2px #1982fc solid;
      position: absolute;
      bottom: 1rem;
      background-color: #fff;
      width: 80%;
      max-width: 500px;
      min-width: 300px;
      height: 80% !important;
      border-radius: 20px;
      overflow: hidden;
    }
  }
`;
