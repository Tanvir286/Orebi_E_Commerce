import React from "react";

const ListItem = ({ className, children, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      {children}
    </li>
  );
};

export default ListItem;
