import { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const [output, setOutput] = useState("");

  const { register, handleSubmit } = useForm();

  const loginUser = (data) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" {...register("password")} />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <pre>{output}</pre>
    </>
  );
};
