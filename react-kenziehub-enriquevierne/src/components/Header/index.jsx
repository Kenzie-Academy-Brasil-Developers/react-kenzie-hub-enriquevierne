import { Link } from "react-router-dom";
import Logo from "../../assets/Group189.png";
import {
  StyledDiv,
  StyledDivDashboardPage,
  StyledDivRegisterPage,
  StyledHeader,
} from "./style";
import { StyledButton } from "../../pages/register/style";

export const Header = ({ backToLogin, logoutUser }) => {
  return (
    <>
      {backToLogin ? (
        <StyledHeader>
          <StyledDivRegisterPage>
            <img src={Logo} alt="" />
            <StyledButton onClick={backToLogin}>Voltar</StyledButton>
          </StyledDivRegisterPage>
        </StyledHeader>
      ) : null || logoutUser ? (
        <StyledHeader>
          <StyledDivDashboardPage>
            <img src={Logo} alt="" />
            <StyledButton onClick={logoutUser}>Sair</StyledButton>
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
