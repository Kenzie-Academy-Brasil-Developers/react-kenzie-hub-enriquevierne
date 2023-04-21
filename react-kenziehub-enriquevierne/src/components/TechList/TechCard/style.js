import styled from "styled-components";

export const StyleTechCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12.182px;
  gap: 12.18px;

  width: 95%;
  max-width: 732px;
  height: 48.73px;

  background: var(--color-black);
  border-radius: 4.06066px;

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.888rem;
    line-height: 24px;
    color: var(--color-gray);
  }
  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 22px;

    text-align: right;

    color: var(--color-gray-30);
  }
`;
