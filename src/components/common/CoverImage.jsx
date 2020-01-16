import React from "react";
import PropTypes from "prop-types";

import "./CoverImage.scss";

export default function CoverImage(props) {
  const { value } = props;

  return (
    <div className="cover_image-component">
      <img
        className="cover_image-component__avatar"
        src={value}
        alt=""
        role="presentation"
      />
    </div>
  );
}

CoverImage.propTypes = {
  value: PropTypes.string.isRequired
};
