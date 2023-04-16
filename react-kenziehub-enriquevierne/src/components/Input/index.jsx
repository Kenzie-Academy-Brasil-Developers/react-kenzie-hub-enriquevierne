import { StyledInput } from "../../styles/input"
import { StyledDivInput, StyledLabel } from "./style"

export const Input = ({label, id, type, register}) => {

    return (
        <StyledDivInput>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledInput type={type} id={id} {...register} />
        </StyledDivInput>

    )
} 