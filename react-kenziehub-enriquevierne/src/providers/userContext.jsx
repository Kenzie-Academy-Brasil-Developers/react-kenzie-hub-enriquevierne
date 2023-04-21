import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    //Ter uma rota de api adequada para isso!
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get(`/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("dashboard");
      } catch (error) {
        toast.error(error.message);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };

    if (token && userId) {
      userAutoLogin();
    }
  }, []);
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
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USER");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ loginUser, registerUser, user, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
