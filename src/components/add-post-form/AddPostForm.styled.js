import styled from "styled-components";

export const StyledAddPostForm = styled.form`
  width: 1200px;
  height: 850px;
  background-color: white;
  display: grid;
  grid-template-columns: 600px auto;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #afc1d9;
  position: relative;

  button {
    padding: 10px;
    background-color: #00a3ff;
    color: #fff;
    width: 100px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem auto;
    position: absolute;
    top: 0;
    right: 2rem;
  }

  span {
    color: #fff !important;
    padding: 5px;
    width: 140px;
    margin-right: auto;
    display: grid;
    place-content: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    background-color: #000;
  }

  input,
  textarea {
    padding: 10px;
    width: 100%;
    border: 1px gainsboro solid;
    border-radius: 5px;
    font-family: "lato";
  }

  .error {
    position: absolute;
    background-color: red;
    color: #fff;
    padding: 10px;
  }

  .col {
    gap: 0.5rem;
  }

  .choose {
    padding: 10px 10px;
    border-radius: 20px;
    color: #fff;
    display: grid;
    place-content: center;
    text-align: center;
    font-size: 1.2rem;
  }

  .choose input {
    border: none;
    background-color: #00a3ff;
    color: #fff;
  }

  .image {
    min-height: 100%;
    background-color: #d9d9d9;
    display: grid;
    place-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .form-right {
    gap: 1rem;
    padding: 5%;
    width: 100%;
    padding-top: 4rem;
    position: relative;

    .btm {
      margin-top: 1rem;
    }
  }
`;
