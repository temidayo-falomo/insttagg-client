import styled from "styled-components";

export const StyledAnonCard = styled.div`
  width: 400px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  padding: 12px;
  position: relative;
  min-height: 200px;

  li {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }

  span {
    font-size: 0.7rem;
  }

  .card-top {
    margin-bottom: 0.8rem;
  }

  .card-bottom {
    width: 100%;
    padding: 10px;
  }

  .col {
    gap: 0.5rem;
  }

  .row {
    gap: 1rem;
    align-items: center;
  }

  .image {
    max-height: 180px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .bookmark {
    font-size: 1.2rem;
    cursor: pointer;
  }

  .user {
    width: 40px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    border-radius: 50%;
    overflow: hidden;
    border: 2px black solid;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .dropdown {
    position: absolute;
    right: 4%;
    z-index: 99;
    top: 15%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  .dropdown p {
    border: 2px gainsboro solid;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    cursor: pointer;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  .dropdown p:hover {
    background-color: #000;
    color: #fff;
  }
`;
