import styled from "styled-components";

export const StyledAnonUserInfo = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  text-align: center;
  margin-top: 5rem;

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  button {
    padding: 10px 35px;
    border-radius: 5px;
    background-color: black;
    color: white;
  }

  button:hover {
    border: 1px solid black;
    color: #000;
    background-color: #fff;
  }

  .user-info-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 100%;
  }

  .user-info-mid {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .user-info-bottom {
    width: 100%;
    text-align: left;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  .user-info-bottom p {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`