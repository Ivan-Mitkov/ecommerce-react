import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollectionOverview from "../../components/collections-overview";
import Collection from "../collection/index";
import { updateColections } from "../../redux/shop/shopAction";
import { firestore, converCollectionSnapshotToMap } from "../../firebase/utils";

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribeFromSnapshot = () => {
      //get collection ref from firestore
      const collectionRef = firestore.collection("collections");
      //get data from this ref
      collectionRef.onSnapshot(async (snapshot) => {
        // console.log(snapshot);
        //convert data from firebase to format {id,title,items,routeName}
        const collectionMapped = converCollectionSnapshotToMap(snapshot);
        dispatch(updateColections(collectionMapped));
      });
    };

    return () => unsubscribeFromSnapshot();
    // eslint-disable-next-line
  }, []);
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
