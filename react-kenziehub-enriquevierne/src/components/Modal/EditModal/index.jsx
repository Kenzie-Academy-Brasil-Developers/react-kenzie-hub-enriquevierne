import { useContext } from "react";
import { StyledDivButtons, StyledModal } from "./style";
import { formEditTechExampleSchema } from "../../FormExample/formEditTechExampleSchema";
import { TechContext } from "../../../providers/techContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledSelect } from "../../../styles/select";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";

import { StyledLabel } from "../../Input/style";

export const EditModal = ({ tech, setIsOpenEdit }) => {
  const { editTechs, removeTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formEditTechExampleSchema),
  });

  const submit = (data) => {
    const id = tech.id;
    editTechs(data, id);
  };

  const remove = (e) => {
    e.preventDefault();
    const id = tech.id;
    removeTech(id);
  };

  return (
    <StyledModal role="dialog">
      <div>
        <p>Detalhes Tecnologia</p>
        <span onClick={() => setIsOpenEdit(false)}>X</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          label="Nome"
          placeholder={tech.title}
          value={tech.title}
        />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <div>
          <StyledLabel htmlFor="">Selecionar Status</StyledLabel>
          <StyledSelect {...register("status")} placeholder={tech.status}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </StyledSelect>
        </div>
        <StyledDivButtons>
          <StyledButton type="submit">Salvar</StyledButton>
          <StyledButton onClick={(e) => remove(e)}>Excluir</StyledButton>
        </StyledDivButtons>
      </form>
    </StyledModal>
  );
};
