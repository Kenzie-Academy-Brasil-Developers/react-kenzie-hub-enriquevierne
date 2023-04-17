import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginExampleSchema } from "../../components/FormExample/formLoginExampleSchema";
import { useState } from "react";
import { StyledButtonRegister, StyledForm } from "./style";
import { StyledButton } from "../../styles/button";
import { Header } from "../../components/Header";
import { InputPassword } from "../../components/InputPassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@USER", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      notifyFailed(error.response.data.message);
    }
  };

  const toRegister = () => {
    navigate("/register");
  };

  const notifyFailed = (data) => {
    toast.error(data, {
      position: "top-right",
      autoClose: 2300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit(loginUser)}>
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
      <ToastContainer />
    </>
  );
};
