import styled from "styled-components";

export const StyledMainContent = styled.div`
  /* border: 2px gainsboro solid; */
  position: relative;
  overflow: auto;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 0.4em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: aliceblue;
  }
`;
