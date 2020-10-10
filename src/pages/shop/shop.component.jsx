import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview";
import Collection from "../collection/index";
const Shop = ({ match }) => {
  // console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        component={Collection}
      ></Route>
    </div>
  );
};

export default Shop;
