import React from "react";
import "./styles.scss";
import CollectionItem from "../../components/cart-item/";
const Category = ({ match }) => {
  const category = match.params.categoryId;
  console.log(category);
  return (
    <div className="category">
      <h2>category page</h2>
    </div>
  );
};

export default Category;
