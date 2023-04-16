import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 33.6911px 17.6477px;
  gap: 17.65px;
  margin: 20px auto;

  width: 296px;
    
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  > h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;
    color: var(--color-gray);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  div > span {
    margin-top: 10px;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--color-gray-30);
  }

  p {
    text-align: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--color-gray-30);
  }
`;

export const StyledA = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 17.9153px;
  gap: 8.14px;

  width: 259.9px;
  height: 38.5px;

  background: var(--color-gray-30);

  border: 0.9772px solid var(--color-gray-30);
  border-radius: 3.25733px;

  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;
  color: var(--color-gray);
`;
