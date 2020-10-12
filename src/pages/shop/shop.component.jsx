import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollectionOverview from "../../components/collections-overview";
import Collection from "../collection/index";
import { updateColections } from "../../redux/shop/shopAction";
import { firestore, converCollectionSnapshotToMap } from "../../firebase/utils";
import WithSpinner from "../../components/with-spinner";

//HOC components
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribeFromSnapshot = () => {
      //get collection ref from firestore
      const collectionRef = firestore.collection("collections");
      //get data from this ref
      collectionRef.onSnapshot(async (snapshot) => {
        // console.log(snapshot);
        //convert data from firebase to format {id,title,items,routeName}
        const collectionMapped = await converCollectionSnapshotToMap(snapshot);
        dispatch(updateColections(collectionMapped));
      });
    };
    setIsLoading(false);

    return () => {
      return unsubscribeFromSnapshot(), setIsLoading(true);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      ></Route>
    </div>
  );
};

export default Shop;
