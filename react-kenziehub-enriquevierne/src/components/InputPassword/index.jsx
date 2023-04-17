import { useState } from "react";
import { StyledDivInput, StyledLabel } from "../Input/style";
import { StyledDivPassword, StyledInputPassword } from "./style";
import Show from "../../assets/eye.png";

export const InputPassword = ({ label, id, type, register, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <StyledDivInput>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledDivPassword>
        {!show ? (
          <>
            <StyledInputPassword type={type} id={id} {...register} placeholder={placeholder}/>
            <img src={Show} onClick={() => setShow(true)}/>
          </>
        ) : (
            <>
            <StyledInputPassword type="text" id={id} {...register} placeholder={placeholder}/>
            <img src={Show} onClick={() => setShow(false)}/>
          </>
        )}
      </StyledDivPassword>
    </StyledDivInput>
  );
};
