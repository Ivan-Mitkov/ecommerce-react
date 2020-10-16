import React, { useContext } from "react";
import { auth } from "../../firebase/utils";
// import "./styles.scss";
//https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon";
import Cart from "../cart";
import CurrentUserContext from "../../context/currentUser/currentUserContext";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";
import { CartContext } from "../../providers/cart/CartProvider";


const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const cart = useContext(CartContext);
  const { hidden } = cart;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <Cart />}
    </HeaderContainer>
  );
};

export default Header;
