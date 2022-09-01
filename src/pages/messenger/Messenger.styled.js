import styled from "styled-components";

export const StyledMessenger = styled.aside`
  min-height: 90vh;
  /* background-color: #1982fc; */

  aside {
    position: absolute !important;
    top: 0;
    width: 100%;
    height: 80px !important;
    margin: 0 !important;
    padding: 20px !important;
    border-bottom: 1px gainsboro solid !important;
    
  }

  ul {
    display: flex;
    flex-direction: row !important;
    gap: 5rem;
    padding: 20px !important;
  }

  .messenger-mid {
    display: grid;
    place-content: center;
  }
`;
