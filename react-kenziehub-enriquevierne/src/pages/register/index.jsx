import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterExampleSchema } from "../../components/FormExample/formRegisterExampleSchema";
import { api } from "../../services/api";
import { StyledForm } from "../login/style";
import { StyledButton } from "../../styles/button";
import { StyledSelect } from "../../styles/select";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegisterExampleSchema),
  });

  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response = await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const backToLogin = () => {
    
    navigate("/");

  }

  return (
    <>
      <Header backToLogin={backToLogin}/>
      <StyledForm onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <Input type="text" label="Nome" register={register("name")} placeholder="Digite aqui seu nome"/>
        {errors.name ? <p>{errors.name.message}</p> : null}
        <Input type="email" label="Email" register={register("email")} placeholder="Digite aqui seu email"/>
        {errors.email ? <p>{errors.email.message}</p> : null}
        <Input type="password" label="Senha" register={register("password")} placeholder="Digite aqui sua senha"/>
        {errors.password ? <p>{errors.password.message}</p> : null}
        <Input
          type="password"
          label="Confirmar senha"
          register={register("confirm")}
          placeholder="Digite novamente sua senha" />
        {errors.confirm ? <p>{errors.confirm.message}</p> : null}
        <Input type="text" label="Bio" register={register("bio")} placeholder="Digite aqui uma descrição"/>
        {errors.bio ? <p>{errors.bio.message}</p> : null}
        <Input type="text" label="Contato" register={register("contact")} placeholder="Digite aqui seu contato"/>
        {errors.contact ? <p>{errors.contact.message}</p> : null}

        <StyledSelect {...register("course_module")}>
          <option>"Primeiro módulo (Introdução ao Frontend)"</option>
          <option>"Segundo módulo (Frontend Avançado)"</option>
          <option>"Terceiro módulo (Introdução ao Backend)"</option>
          <option>"Quarto módulo (Backend Avançado)"</option>
        </StyledSelect>
        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
    </>
  );
};
