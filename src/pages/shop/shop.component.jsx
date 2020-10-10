import React from "react";
import {Route} from 'react-router-dom';

import CollectionOverview from "../../components/collections-overview";
import Category from '../category/';
const Shop = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}  />
      <Route exact path={`${match.path}/:categoryId`} component={Category}  />
    </div>
  );
};

export default Shop;
