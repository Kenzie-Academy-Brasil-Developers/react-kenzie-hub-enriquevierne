import { useContext } from "react";
import { StyledInput } from "../../../styles/input";
import { formCreateTechExampleSchema } from "../../FormExample/formCreateTechExampleSchema";
import { TechContext } from "../../../providers/techContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledSelect } from "../../../styles/select";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";
import { StyledModal } from "./style";
import { StyledLabel } from "../../Input/style";

export const CreateModal = ({ setIsOpenCreate }) => {
  const { addTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formCreateTechExampleSchema),
  });

  const submit = (data) => {
    addTechs(data);
    setIsOpenCreate(false);
  };

  return (
    <StyledModal role="dialog">
      <div>
        <p>Cadastrar Tecnologia</p>
        <span onClick={() => setIsOpenCreate(false)}>X</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          label="Nome"
          register={register("title")}
          placeholder={"Digite uma tecnologia"}
        />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <div>
          <StyledLabel htmlFor="">Selecionar Status</StyledLabel>
          <StyledSelect {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </StyledSelect>
        </div>
        <StyledButton type="submit">Cadastrar</StyledButton>
      </form>
    </StyledModal>
  );
};
