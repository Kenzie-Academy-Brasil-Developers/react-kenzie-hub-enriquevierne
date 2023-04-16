import styled from "styled-components";

export const StyledDivDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: 131px;

  border-top: 1px solid var(--color-gray-70);
  border-bottom: 1px solid var(--color-gray-70);

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-gray);
  }
  p {
    font-family: "Inter",sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-gray-30);
  }

  @media(min-width:500px){

    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
`;
