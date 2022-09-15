import styled from "styled-components";

export const StyledFriendCard = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.8rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 300px;
  min-height: 280px;

  button {
    padding: 8px 20px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }

  button:hover {
    background-color: #fff;
    color: #000;
    border: 1px #000 solid;
  }

  .following {
    background-color: #fff;
    color: #000;
    border: 1px #000 solid;
  }

  .image {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
