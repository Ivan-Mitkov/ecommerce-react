import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { createSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const selectDirectories = createSelector(
  (state) => state.directory,
  (directory) => directory.sections
);
console.log(selectDirectories);
const Directory = (props) => {
  const sections = useSelector(selectDirectories);
  const menus = sections.map(({ id, ...sectionProps }) => (
    <MenuItem key={id} {...sectionProps} />
  ));
  return <div className="directory-menu">{menus}</div>;
};

export default Directory;
