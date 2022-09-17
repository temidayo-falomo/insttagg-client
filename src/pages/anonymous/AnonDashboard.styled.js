import styled from "styled-components";

export const StyledAnonDashboard = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100px auto 400px;

  .infinite-msg {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

    width: 400px;
    display: grid;
    place-content: center;
    border-radius: 10px;
    font-weight: 600;

    height: 100px;
  }

  .anon-content {
    gap: 20px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    padding-bottom: 3rem;


    .anon-cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px;
      width: 100%;
      gap: 2rem;
    }
  }

  @media(max-width: 1030px) {
    grid-template-columns: auto auto;
  }
`;
