import React from "react";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";

import "./Description.scss";

export default function Description(props) {
  const { value, style } = props;
  const cleanValue = sanitizeHtml(value, {
    allowedTags: ["b", "i", "em", "strong", "a", "p"],
    allowedAttributes: {
      a: ["href"]
    }
  });

  return (
    <div
      className="description-component"
      style={style}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: cleanValue }}
    />
  );
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  style: PropTypes.object
};
Description.defaultProps = {
  style: {}
};
