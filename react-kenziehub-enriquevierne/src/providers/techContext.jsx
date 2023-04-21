import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@TOKEN") || null)
  
  const addTechs = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log({ data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <TechContext.Provider value={{ addTechs }}>
      {children}
    </TechContext.Provider>
  );
};
