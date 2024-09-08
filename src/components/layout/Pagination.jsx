import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../layout/ProductCard";
import productThree from "../../../public/assets/p10.png";
import Paragraph from "./Paragraph";

import { productInfo } from "../../Demo Data/ProductCategoryData";

const items = [...productInfo];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className={` sm:w-[49%] lg:w-[32%] mb-3`}>
            <ProductCard
              className="w-full mb-3"
              productImageLink={item.productImageSrc}
              tag={item.badgeText}
              tagVisibility={item.badge}
              productName={item.productName}
              productPrice={item.productPrice}
              productColor={item.productColor}
            />
          </div>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(5);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <Items currentItems={currentItems} className={"kaj-kortace"} />
      </div>
      <div className="mt-10 lg:flex justify-between">
        <ReactPaginate
          onPageChange={handlePageClick}
          containerClassName="flex gap-x-1 sm:gap-x-2 md:gap-x-5"
          activeLinkClassName="!bg-black text-white"
          previousLinkClassName="hidden"
          pageRangeDisplayed={4}
          breakLabel="..."
          breakLinkClassName="px-4"
          marginPagesDisplayed={2}
          nextLinkClassName="hidden"
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageLinkClassName="px-2 md:px-4 py-1 md:py-2.5 text-[#767676] border-[1px] border-[#D8D8D8]"
        />
        <Paragraph
          text={`Products from ${itemOffset + 1} to ${endOffset} of ${items.length}`}
          classname={"pt-3 md:pt-5 lg:pt-0 font-dm-sans text-secondary-color"}
        />
      </div>
    </>
  );
}

export default Pagination;
