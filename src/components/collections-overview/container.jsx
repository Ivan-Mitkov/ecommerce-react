import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner";
import Overview from "./overview";

const mapStateToProps = (state) => {
  return { isLoading: state.shop.isFetching };
};

const Container = compose(connect(mapStateToProps), WithSpinner)(Overview);

export default Container;
