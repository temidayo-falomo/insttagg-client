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

    .top-bar {
      height: 80px;
      border-bottom: 1px gainsboro solid;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 4%;
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
    }

    .bottom-input {
      border: 1px gainsboro solid;
      height: 50px;
      display: flex;

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
`;
