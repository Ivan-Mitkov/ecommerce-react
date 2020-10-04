import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./meny-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const handleClick = () => {
    //url - (string) The matched portion of the URL. Useful for building nested <Link>s
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className={["menu-item", size].join(" ")} onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
