import { Link } from "react-router-dom";
import Logo from "../../assets/Group189.png";
import {
  StyledDiv,
  StyledDivDashboardPage,
  StyledDivRegisterPage,
  StyledHeader,
} from "./style";
import { StyledButton } from "../../pages/register/style";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";

export const Header = ({ backToLogin }) => {
  const { userLogout } = useContext(UserContext);

  return (
    <>
      {backToLogin ? (
        <StyledHeader>
          <StyledDivRegisterPage>
            <img src={Logo} alt="" />
            <StyledButton onClick={backToLogin}>Voltar</StyledButton>
          </StyledDivRegisterPage>
        </StyledHeader>
      ) : null || userLogout ? (
        <StyledHeader>
          <StyledDivDashboardPage>
            <img src={Logo} alt="" />
            <StyledButton onClick={userLogout}>Sair</StyledButton>
          </StyledDivDashboardPage>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <StyledDiv>
            <img src={Logo} alt="" />
          </StyledDiv>
        </StyledHeader>
      )}
    </>
  );
};
