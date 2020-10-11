import { UPDATE_COLLECTION } from "./types";

export const updateColections = (collectionObj) => {
  return { type: UPDATE_COLLECTION, payload: collectionObj };
};
