import styled from "styled-components";

export const StyledNavbar = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;

  img {
    width: 150px;
  }

  input {
    padding: 10px;
    min-width: 400px;
    border: 1px #afc1d9 solid;
    text-transform: capitalize;
  }

  span {
    font-size: 0.9rem;
    color: gray;
  }

  input::placeholder {
    color: #afc1d9;
  }

  .col {
    gap: 0.2rem;
  }

  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .users-dropdown {
    position: absolute;
    background-color: #fff;
    width: 400px;
    height: 200px;
    border: 1px #aec1d9 solid;
    border-radius: 10px;
    right: 0.8rem;
    top: 4.5rem;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;

    .user {
      padding: 5px;
      width: 100%;
      height: 80px;
      border-radius: 5px;
      align-items: center;
      cursor: pointer;
    }

    /* .user:hover {
      border-bottom: 1px black solid;
    } */
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    .users-dropdown {
      top: 7rem;
      width: 95%;
    }

    input {
      width: 100%;
      min-width: 100%;
    }
  }
`;
