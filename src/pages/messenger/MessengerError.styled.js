import styled from "styled-components";

export const StyledMessengerError = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    text-align: center;
    width: 90%;
    font-size: 1.2rem;
    color: #000;
    line-height: 40px;
     color: royalblue;
  }

  p {
    text-align: center;
    width: 70%;
    font-weight: 300;
    font-size: .9rem;
    margin-top: .5rem;
    line-height: 22px;
  }

  .col {
    border: 1px gainsboro solid;
    width: 300px;
    min-height: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    gap: .5rem;
    align-items: center;
    justify-content: center;
  }

  /* CSS */

  button {
    background-color: transparent;
    color: #000;
    border: 1px black solid;
    padding: 15px 10px;
    border-radius: 10px;
    width: 150px;
    font-weight: 600;
  }
`;
