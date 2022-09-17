import styled from "styled-components";

export const StyledAnonRightbar = styled.div`
  border-left: 1px var(--color-border) solid;
  padding: 20px;
  overflow: auto;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 0em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: aliceblue;
  }

  @media (max-width: 1030px) {
    position: absolute;
    text-align: center;
    background-color: #fff;
    width: 90%;
    height: 80vh;
    bottom: 5%;
    right: 0;
    left: 5%;
    border-radius: 20px;
    z-index: 99999;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border: 2px black solid;
    display: none;

  }

`;
