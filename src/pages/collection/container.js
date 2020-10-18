import React from "react";
import { useQuery, gql } from "@apollo/client";
import Spinner from "../../components/spinner";
import Collection from "./collection";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Container = ({ match }) => {
  const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });
  if (loading) return <Spinner />;
  if (error) return `Error! ${error}`;
  console.log(data);
  return (
    <Collection
      collections={data.getCollectionsByTitle.items}
      match={match}
    ></Collection>
  );
};

export default Container;
