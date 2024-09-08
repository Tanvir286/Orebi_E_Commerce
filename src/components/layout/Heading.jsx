import React from "react";

const Heading = (props) => {
  return props.tagname ? (
    <props.tagname className={props.className}>{props.text}</props.tagname>
  ) : (
    <h1 className={props.className}>{props.text}</h1>
  );
};

export default Heading;
