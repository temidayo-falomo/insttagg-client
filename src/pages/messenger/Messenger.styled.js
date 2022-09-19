import styled from "styled-components";

export const StyledMessenger = styled.aside`
  min-height: 100vh;
  overflow: hidden;

  aside {
    position: absolute !important;
    top: 0;
    width: 100%;
    height: 90px !important;
    margin: 0 !important;
    padding: 35px 20px !important;
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

  @media (max-width: 500px) {
    aside {
      width: 100%;

      ul {
        gap: 1rem;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
`;
