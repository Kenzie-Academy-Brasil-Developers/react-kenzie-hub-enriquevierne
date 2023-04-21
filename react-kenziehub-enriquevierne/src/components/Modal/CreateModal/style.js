import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17.65px;

  width: 90%;
  max-width: 350px;
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);

  background: var(--color-gray-90);
  box-shadow: 0px 4px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  > div {
    background: var(--color-gray-70);
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
    border-radius: 4px 4px 0px 0px;
    color: var(--color-gray);
  }

  input {
    width: 100%;
  }
  button {
    width: 100%;
    margin: 12px 0px;
  }
`;
