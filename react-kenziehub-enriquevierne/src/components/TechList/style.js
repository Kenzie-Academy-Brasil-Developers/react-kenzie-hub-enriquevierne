import styled from "styled-components";

export const StyledTitleTechList = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 0px;
  width: 95%;
  max-width: 780px;
  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 18px;
    color: var(--color-gray);
  }
  button {
    width: 32.49px;
    height: 32px;
    background: var(--color-gray-90);
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--color-gray);
  }
`;
export const StyledTechList = styled.ul`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 95%;
  max-width: 780px;
  background-color: var(--color-gray-90);
  padding: 22px 0px;
  border-radius: 4px;
`;
