import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import Button from "../button";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({item,addItem }) => {
  const{id,imageUrl,name,price}=item
  const handleClick = () => {
    // console.log(item)
    addItem(item);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={ handleClick}>
        Add to cart
      </Button>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
