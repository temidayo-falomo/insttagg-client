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
`;
