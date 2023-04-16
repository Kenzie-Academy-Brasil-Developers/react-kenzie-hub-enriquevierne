import { useState } from "react";
import { Header } from "../../components/Header";
import { StyledDivDashboard } from "./style";

export const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem("@USER"));

  return (
    <>
      <StyledDivDashboard>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </StyledDivDashboard>
    </>
  );
};
