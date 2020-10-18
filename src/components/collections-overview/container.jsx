import React from "react";
import { useQuery, gql } from "@apollo/client";
import Overview from "./overview";
import Spinner from "../spinner";

const GET_COLLECTIONS = gql`
  {
    collections {
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
const Container = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;
  return (
    <Overview collections={data.collections}>{console.log(data)}</Overview>
  );
};

export default Container;
