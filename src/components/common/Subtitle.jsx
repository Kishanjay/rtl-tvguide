import React from "react";
import PropTypes from "prop-types";

import "./Subtitle.scss";

export default function Subtitle(props) {
  const { value } = props;

  return <h2 className="subtitle-component">{value}</h2>;
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired
};
