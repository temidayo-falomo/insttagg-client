import styled from "styled-components";

export const StyledSingleComment = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 20px;
  border-radius: 10px;
  border: 1px gainsboro solid;

  .col {
    gap: .3rem;
  }

  h5 {
    font-weight: 500;
  }

  p {
    color: gray;
    font-size: .9rem;
  }

  .avt {
    min-width: 40px;
    min-height: 40px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }
`;
