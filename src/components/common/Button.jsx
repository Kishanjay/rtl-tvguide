import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export default function Button(props) {
  const { value, onClick, style } = props;

  return (
    <button
      type="button"
      className={`button-component ${style}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string
};
Button.defaultProps = {
  onClick: () => {},
  style: "primary"
};
