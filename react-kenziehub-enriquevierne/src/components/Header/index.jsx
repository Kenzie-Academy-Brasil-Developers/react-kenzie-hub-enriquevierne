import { Link } from "react-router-dom";
import Logo from '../../assets/Group189.png'
import { StyledHeader } from "./style";

export const Header = () => {

const clearLocalStorage = () => {

    const data = localStorage.clear()

}

    return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="" />
      </div>
    </StyledHeader>
  );
};
