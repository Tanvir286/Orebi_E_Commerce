import React from "react";

const Image = ({imageLink , altText , className}) => {
  return <img src={imageLink} alt={altText} className={className} />;
};

export default Image;
