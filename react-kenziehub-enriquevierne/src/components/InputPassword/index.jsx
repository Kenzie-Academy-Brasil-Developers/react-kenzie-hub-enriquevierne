import { useState } from "react";
import { StyledDivInput, StyledLabel } from "../Input/style";
import { StyledDivPassword, StyledInputPassword } from "./style";
import Show from "../../assets/eye.png";

export const InputPassword = ({ label, id, type, register }) => {
  const [show, setShow] = useState(false);

  return (
    <StyledDivInput>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledDivPassword>
        {!show ? (
          <>
            <StyledInputPassword type={type} id={id} {...register} />
            <img src={Show} onClick={() => setShow(true)}/>
          </>
        ) : (
            <>
            <StyledInputPassword type="text" id={id} {...register} />
            <img src={Show} onClick={() => setShow(false)}/>
          </>
        )}
      </StyledDivPassword>
    </StyledDivInput>
  );
};
