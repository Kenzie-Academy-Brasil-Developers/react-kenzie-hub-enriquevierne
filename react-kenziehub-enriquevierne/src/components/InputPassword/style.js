import styled from "styled-components";
import Logo from "../../assets/eye.png";

export const StyledInputPassword = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 13.0293px;
  gap: 8.14px;

  width: 264.66px;
  height: 38.5px;

  background: var(--color-gray-70);

  border: 0.9772px solid var(--color-gray-70);
  border-radius: 3.20867px;
  color: var(--color-gray);

  :focus {
    background: var(--color-gray-70);
    border: 0.9772px solid var(--color-gray);
    color: var(--color-gray);
  }
`;

export const StyledDivPassword = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 13.36px;
    height: 21px;
    right: 10px;
    top: 8px;
    color: #868e96;
    cursor: pointer;
    
  }
`;
