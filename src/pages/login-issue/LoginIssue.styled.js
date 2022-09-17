import styled from "styled-components";

export const StyledLoginIssue = styled.div`
  height: 100vh;
  color: white;
  overflow: auto;
  color: #000 !important;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2.5rem;
    color: #fff;
  }

  p {
    font-size: 1.3rem;
    line-height: 40px;
    padding: 20px 20px;
  }

  .bar {
    background-color: #1c82fc;
    padding: 20px;
  }

  .issue-nav {
    padding: 20px;
    border: 2px #1c82fc solid;
    width: 80%;
    margin: 1rem auto;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 20px;

    button {
      width: 200px;
      border-radius: 10px;
      padding: 15px;
      background-color: #1c82fc;
      color: #fff;
      font-weight: 600;

      :hover {
        background-color: transparent;
        border: 2px #1c82fc solid;
        color: #1c82fc;
      }
    }
  }

  .blog-container {
    width: 80%;
    margin: 2rem auto;

    .rect {
      border: 2px black solid;
      margin-bottom: 3rem;
      border-radius: 20px;
      overflow: hidden;
    }
  }

  @media (max-width: 450px) {
    .issue-nav {
      justify-content: center;
      gap: 1rem;
    }
  }
`;
