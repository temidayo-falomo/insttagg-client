import styled from "styled-components";

export const StyledBookmarks = styled.div`
  display: grid;
  grid-template-columns: 100px auto 400px;
  height: 100vh;
  overflow: hidden;

  .card {
    background-color: whitesmoke !important;
    border: 1px black solid;
  }

  .like-btn {
    display: none !important;
  }

  .card-bar {
    display: none !important;
  }

  .outline-more {
    display: none !important;
  }

  .bookmarks {
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2rem;
    padding: 20px;
    padding-top: 2rem;
    padding-bottom: 3rem;
    overflow: auto;
    height: 90vh;
    position: relative;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 50px auto;
  }
`;
