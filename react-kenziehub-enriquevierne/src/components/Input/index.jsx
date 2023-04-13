export const Input = ({label, id, type, register}) => {

    return (
        <div>
        {label ? <label>{label}</label> : null}
        <input type={type} id={id} {...register} />
        </div>

    )
} 