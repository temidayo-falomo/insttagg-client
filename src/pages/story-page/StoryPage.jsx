import React from "react";
import { StyledStoryPage } from "./StoryPage.styled";

const storyData = [
  {
    id: "1",
    image: "hello",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor excepturi nobis adipisci iusto laborum impedit unde cumque fugiat obcaecati!",
  },
];

function StoryPage() {
  return (
    <StyledStoryPage>
      <div className="story-card">
        <h2>Welcome To Instagram Stories!!</h2>
        <p>Swipe{`>>`}</p>
      </div>
    </StyledStoryPage>
  );
}

export default StoryPage;
