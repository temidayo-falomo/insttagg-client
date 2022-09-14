import styled from "styled-components";

export const StyledAllUsers = styled.div`
  display: grid;
  grid-template-columns: 100px auto 400px;
  min-height: 100vh;
  overflow: hidden;

  .friend-cards {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2rem;
    position: relative;
    padding-bottom: 4rem;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 50px auto;
  }
`;
