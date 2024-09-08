import React, { useState } from "react";
import Heading from "../layout/Heading";
import { HiMiniXMark } from "react-icons/hi2";

const ShopSideBarDropDownItem = ({
  title,
  className,
  children,
  subDropDownOn,
}) => {
  const [subDropDownOpen, setSubDropDwonOpen] = useState(subDropDownOn);
  const [subDropDownItemShow, setSubDropDwonShow] = useState(false);

  return (
    <div>
      {subDropDownOpen ? (
        <div onClick={() => setSubDropDwonShow(!subDropDownItemShow)}>
          <Heading
            tagname={"h5"}
            text={[
              title,
              <HiMiniXMark
                className={`capitalize font-dm-sans text-secondary-color transition  duration-300 ${subDropDownItemShow ? "rotate-180" : "rotate-45"}`}
              />,
            ]}
            className={className}
          />
        </div>
      ) : (
        <Heading tagname={"h5"} text={title} className={className} />
      )}
      {subDropDownItemShow && children}
    </div>
  );
};

export default ShopSideBarDropDownItem;
