import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/container";
import CollectionContainer from "../collection/container";
import { fetchCollectionAsync } from "../../redux/shop/shopAction";

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCollectionAsync());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      ></Route>
    </div>
  );
};

export default Shop;
