import styled from "styled-components";

export const StyledUserById = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100px auto 400px;

  @media (max-width: 1030px) {
    grid-template-columns: 50px auto;

    p {
      width: 80% !important;
    }
  }
`;
