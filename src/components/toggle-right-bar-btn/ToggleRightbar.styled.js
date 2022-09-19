import styled from "styled-components";

export const StyledToggleRightbar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px black solid;
  display: none;
  place-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #fff;
  z-index: 9999999;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 1030px) {
    display: grid;
  }
`;
