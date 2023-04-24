import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [listTech, setListTech] = useState([]);

  const addTechs = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListTech([...listTech, data]);
      toast.success("Tecnologia cadastrada!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const editTechs = async (status, id) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const { data } = await api.put(`/users/techs/${id}`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newListTech = listTech.map((currentTech) =>
        currentTech.id === id ? { ...currentTech, ...status } : currentTech
      );
      setListTech(newListTech);
      toast.info("Tecnologia atualizada");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const removeTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newListTech = listTech.filter(
        (currentTech) => currentTech.id !== techId
      );
      setListTech(newListTech);
      toast.warning("Tecnologia removida");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <TechContext.Provider
      value={{ addTechs, removeTech, listTech, setListTech, editTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};
