import { StyledInput } from "../../styles/input"
import { StyledDivInput, StyledLabel } from "./style"

export const Input = ({label, id, type, register, placeholder}) => {

    return (
        <StyledDivInput>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledInput type={type} id={id} {...register} placeholder={placeholder}/>
        </StyledDivInput>

    )
} 