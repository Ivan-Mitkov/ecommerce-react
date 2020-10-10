import { SHOP_DATA } from "./shopData";
const initialState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState, action) => {
  const { type } = action;
  // console.log(payload);
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
