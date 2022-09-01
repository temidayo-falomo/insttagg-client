import styled from "styled-components";

export const StyledEditInfo = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 4rem;

  h4 {
    text-align: center;
    font-size: 1.2rem;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px #afc1d9 solid;
    color: #afc1d9;
  }

  input::placeholder,
  textarea::placeholder {
    color: #afc1d9;
    opacity: 1;
  }

  button {
    padding: 15px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
  }

  button:hover {
    background-color: #fff;
    color: #000;
    border: 1px black solid;
  }

  /* button:hover {
    background-color: #fff;
    border: 1px #000 solid;
    color: #fff;
  } */

`;
