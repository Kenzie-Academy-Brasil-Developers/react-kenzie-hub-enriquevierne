import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { StyledDivDashboard } from "./style";
import { useNavigate } from "react-router-dom";
import { TechContext } from "../../providers/techContext";
import { TechList } from "../../components/TechList";
import { CreateModal } from "../../components/Modal/CreateModal";
import { EditModal } from "../../components/Modal/EditModal";

export const DashboardPage = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const user = JSON.parse(localStorage.getItem("@USER"));
  
  
  return (
    <>
      <Header/>
      <StyledDivDashboard>
        <h2>Olá, {user?.name}</h2>
        <p>{user?.course_module}</p>
      </StyledDivDashboard>
      <TechList setIsOpenCreate={setIsOpenCreate} />
      {isOpenCreate ? <CreateModal setIsOpenCreate={setIsOpenCreate} /> : null}
    </>
  );
};
