import { useState } from "react";
import { StyleTechCard } from "./style";
import { EditModal } from "../../Modal/EditModal";


export const TechCard = ({ tech }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  
  return (
    <>
      <StyleTechCard onClick={() => setIsOpenEdit(true)}>
        <p>{tech.title}</p>
        <span>{tech.status}</span>
      </StyleTechCard>
      {isOpenEdit ? <EditModal tech={tech} setIsOpenEdit={setIsOpenEdit}/> : null}
    </>
  );
};
