import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CollectionOverview from "../../components/collections-overview";
import Collection from "../collection/index";
import { fetchCollectionAsync } from "../../redux/shop/shopAction";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/with-spinner";

//HOC components
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsCollectionFetching);

  React.useEffect(() => {
    dispatch(fetchCollectionAsync());

    // eslint-disable-next-line
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={isFetching} {...props} />
        )}
      ></Route>
    </div>
  );
};

export default Shop;
