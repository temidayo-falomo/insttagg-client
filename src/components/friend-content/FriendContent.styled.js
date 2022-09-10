import styled from "styled-components";

export const StyledFriendContent = styled.div`
  overflow: auto;
  width: auto;

  button {
    width: 120px;
    padding: 10px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }

  button:hover {
    border: 1px black solid;
    background-color: transparent;
    color: #000;
  }

  .top-shadow {
    width: 100%;
    height: 300px;
    position: relative;
    margin-bottom: 6rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
  }

  .profile-picture {
    height: 200px;
    width: 200px;
    position: absolute;
    bottom: -5rem;
    left: 1rem;
    overflow: hidden;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    border: 5px white solid;
  }

  .friend-info {
    width: 99%;
    margin-left: auto;
    gap: 0.8rem;
    padding-left: 20px;

    p {
      width: 70%;
    }
  }

  .cards {
    margin: 3rem auto;
    padding: 0 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 1030px) {
    .friend-info {
      p {
        width: 90%;
      }
    }
  }
`;
