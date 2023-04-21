import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginExampleSchema } from "../../components/FormExample/formLoginExampleSchema";
import { StyledButtonRegister, StyledForm } from "./style";
import { StyledButton } from "../../styles/button";
import { Header } from "../../components/Header";
import { InputPassword } from "../../components/InputPassword";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { useState } from "react";
import { TechContext } from "../../providers/techContext";

export const LoginPage = () => {
  const { loginUser, user } = useContext(UserContext);
  const { loadTechs } = useContext(TechContext);
  const [token, setToken] = useState(localStorage.getItem("@TOKEN") || "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginExampleSchema),
  });

  const navigate = useNavigate();

  const toRegister = () => {
    navigate("/register");
  };

  const submit = (data) => {
    loginUser(data);
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Input
          type="email"
          label="Email"
          register={register("email")}
          placeholder={"Digite aqui seu email"}
        />
        {errors.email ? <p>{errors.email.message}</p> : null}
        <InputPassword
          type="password"
          label="Senha"
          register={register("password")}
          placeholder={"Digite aqui sua senha"}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <div>
          <StyledButton type="submit">Entrar</StyledButton>
          <span>Ainda não possui uma conta?</span>
          <StyledButtonRegister onClick={toRegister}>
            Cadastrar
          </StyledButtonRegister>
        </div>
      </StyledForm>
    </>
  );
};
