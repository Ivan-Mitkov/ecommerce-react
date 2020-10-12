import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner";
import Collection from "./collection";

const mapStateToProps = (state) => {
  return { isLoading: state.shop.isFetching };
};

const Container = compose(connect(mapStateToProps), WithSpinner)(Collection);

export default Container;
