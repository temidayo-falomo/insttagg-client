import styled from "styled-components";

export const StyledPostById = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100px auto 400px;

  .modal {
    background-color: rgba(70, 69, 69, 0.598);
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 999999;
  }

  .cancel {
    position: absolute;
    z-index: 9999999999999999;
    top: 5%;
    right: 5%;
    font-size: 2rem;
    color: red;
  }
`;
