import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { auth } from "../../firebase/utils";
// import "./styles.scss";
//https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { signOutStart } from "../../redux/user/userActions";
import CartIcon from "../cart-icon";
import Cart from "../cart";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = ({ currentUser, cartHidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          // <OptionLink as="div" onClick={() => auth.signOut()}>
          //   SIGN OUT
          // </OptionLink>
          <OptionLink as="div" onClick={() => signOutStart()}>
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

//createStructuredSelector({inputSelectors}, selectorCreator = createSelector)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   cartHidden: selectCartHidden(state),
// });
export default connect(mapStateToProps, { signOutStart })(Header);
