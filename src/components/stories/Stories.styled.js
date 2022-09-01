import styled from "styled-components";

export const StyledStories = styled.div`
  width: 100%;
  margin-top: 2rem;
  min-height: 500px;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  a {
    margin: 0 auto;
  }

  .button-86 {
    all: unset;
    width: 300px;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-86::after,
  .button-86::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  .button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  .button-86::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  .button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  .button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  .button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }

  .col {
    gap: 0.5rem;
    justify-content: center;
    text-align: center;

    .circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px black solid;
      display: grid;
      place-content: center;
      margin: auto;
    }
  }

  .row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    gap: 2rem;
    width: 100%;
  }

  .col img {
    width: 60px;
  }

  .col p {
    font-weight: 500;
  }
`;
