import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";

export const RegisterPage = () => {
  const [output, setOutput] = useState("");

  const { register, handleSubmit } = useForm();

  const createUser = (data) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form onSubmit={handleSubmit(createUser)}>
        <Input type="text" label="Nome" register={register("name")} />
        <Input type="email" label="Email" register={register("email")} />
        <Input type="password" label="Senha" register={register("password")} />
        <Input
          type="password"
          label="Confirmar senha"
          register={register("password")}
        />
        <Input type="text" label="Bio" register={register("bio")} />
        <Input type="text" label="Contato" register={register("contact")} />

        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <button type="submit">Salvar</button>
      </form>
      <pre>{output}</pre>
    </>
  );
};
