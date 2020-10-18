import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/utils";
// import "./styles.scss";
//https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import CartIcon from "../cart-icon/container";
import Cart from "../cart/container";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = ({ currentUser, hidden:cartHidden }) => {
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
      {cartHidden ? null : <Cart />}
    </HeaderContainer>
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
