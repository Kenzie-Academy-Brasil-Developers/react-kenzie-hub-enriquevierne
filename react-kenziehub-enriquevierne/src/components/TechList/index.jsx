import { useContext, useEffect } from "react";
import { TechCard } from "./TechCard";
import { StyledTechList, StyledTitleTechList } from "./style";
import { TechContext } from "../../providers/techContext";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const TechList = ({ setIsOpenCreate }) => {
  const { listTech, setListTech } = useContext(TechContext);

  const loadTechs = async () => {
    const id = localStorage.getItem("@USERID");
    try {
      const { data } = await api.get(`/users/${id}`);
      setListTech(data.techs);
    } catch (error) {}
  };

  useEffect(() => {
    loadTechs();
  }, []);

  console.log(listTech.length)
  return (
    <div>
      <StyledTitleTechList>
        <h2>Tecnologias</h2>
        <button onClick={() => setIsOpenCreate(true)}>+</button>
      </StyledTitleTechList>
      <StyledTechList>
        {listTech.length > 0 ? listTech.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        )): <p>Você não possui tecnologias adicionadas.</p>}
      </StyledTechList>
    </div>
  );
};
