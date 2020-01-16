import React from "react";
import PropTypes from "prop-types";

import "./Title.scss";

export default function Title(props) {
  const { value, size, className } = props;

  switch (size) {
    case 4:
      return <h4 className={`title-component ${className}`}>{value}</h4>;
    case 3:
      return <h3 className={`title-component ${className}`}>{value}</h3>;
    case 2:
      return <h2 className={`title-component ${className}`}>{value}</h2>;
    default:
      return <h1 className={`title-component ${className}`}>{value}</h1>;
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};
Title.defaultProps = {
  size: 1,
  className: ""
};
