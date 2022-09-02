import styled from "styled-components";

export const StyledToggleRightbar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px black solid;
  display: none;
  place-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #fff;
  z-index: 9999999;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 1030px) {
    display: grid;
  }
`;
