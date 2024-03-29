import styled from "styled-components";

export const StyledLeftbar = styled.aside`
  padding: 10px;
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  border-right: 1px var(--color-border) solid;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  li a {
    font-size: 1.8rem;
    color: #000;
  }

  .active-link {
    fill: #1C82FC;
    color: #1C82FC;
    outline: #1C82FC;
  }

  @media (max-width: 1030px) {
    width: 50px;
  }
`;
