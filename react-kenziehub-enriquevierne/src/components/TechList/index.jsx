import { useContext, useEffect } from "react";
import { TechCard } from "./TechCard";
import { TechContext } from "../../providers/techContext";
import { StyledTechList, StyledTitleTechList } from "./style";

export const TechList = ({ loadTechs }) => {
    const newList = loadTechs
    console.log(newList)
    return (
    <div>
      <StyledTitleTechList>
        <h2>Tecnologias</h2>
        <button>+</button>
      </StyledTitleTechList>
      <StyledTechList>
        {newList ? newList.map(tech => {

            return <TechCard key={tech.id} tech={tech} />

        }) : null}
      </StyledTechList>
    </div>
  );
};
