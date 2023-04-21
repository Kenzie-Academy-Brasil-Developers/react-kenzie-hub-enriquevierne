import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@USER", JSON.stringify(response.data.user));
      setUser(response.data.user);
      toast.success("Login bem sucedido!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ loginUser, registerUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
