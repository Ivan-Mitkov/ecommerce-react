import React, { useContext } from "react";
import { auth } from "../../firebase/utils";
// import "./styles.scss";
//https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon";
import Cart from "../cart";
import CurrentUserContext from "../../context/currentUser/currentUserContext";
import CartContext from "../../context/cart/cartContext";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const cart = useContext(CartContext);
  const [cartHidden, setCartHidden] = React.useState(true);
  React.useEffect(() => {
    const { hidden } = cart;
    setCartHidden(hidden);
  }, []);

  const toggleHidden = () => {
    setCartHidden(!cartHidden);
  };
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
        <CartContext.Provider value={{ hidden: cartHidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </OptionsContainer>
      {cartHidden ? null : <Cart />}
    </HeaderContainer>
  );
};

export default Header;
