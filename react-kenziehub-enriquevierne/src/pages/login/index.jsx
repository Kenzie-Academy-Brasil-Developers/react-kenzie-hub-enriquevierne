import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginExampleSchema } from "../../components/FormExample/formLoginExampleSchema";
import { useState } from "react";
import { StyledA, StyledForm } from "./style";
import { StyledButton } from "../../styles/button";

export const LoginPage = () => {
  const [token, setToken] = useState(localStorage.getItem("@TOKEN") || "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginExampleSchema),
  });

  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      console.log(response);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@USER", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(loginUser)}>
        <h2>Login</h2>
        <Input type="email" label="Email" register={register("email")} />
        {errors.email ? <p>{errors.email.message}</p> : null}
        <Input type="password" label="Senha" register={register("password")} />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <div>
          <StyledButton type="submit">Entrar</StyledButton>
          <span>Ainda não possui uma conta?</span>
          <StyledA href="/register">Cadastrar</StyledA>
        </div>
      </StyledForm>
    </>
  );
};
