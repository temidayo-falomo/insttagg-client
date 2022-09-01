import styled from "styled-components";

export const StyledStoryPage = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: gainsboro;
  background-image: url("https://cdn.dribbble.com/users/1770290/screenshots/6220590/bg_82.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .story-card {
    width: 40vw;
    /* border: 2px black solid; */
    border-radius: 20px;
    height: 80vh;
    display: grid;
    gap: 1rem;
    place-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
  }
`;
