import styled from "styled-components";

export const StyledMessageCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .row {
    gap: 1rem;
  }

  .col {
    gap: 0.5rem;
  }

  span {
    color: #43cc47;
    font-size: .8rem;
  }

  .avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px royalblue solid;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
