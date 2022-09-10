import styled from "styled-components";

export const StyledUserById = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100px auto 400px;
  overflow: auto;

  @media (max-width: 1030px) {
    grid-template-columns: 50px auto;
  }
`;
