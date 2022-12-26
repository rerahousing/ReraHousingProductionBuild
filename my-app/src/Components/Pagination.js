import React, { useContext, useState } from "react";
import PropertyContext from "../Context/Property/PropertyContext.js";

function Pagination(props) {
  const context = useContext(PropertyContext);
  const [pages, setPages] = useState(1);
  const { property, getProperty, loadProperty, count } = context;
  const nbPages = count / 1;

  const fetchMoreData = () => {
    getProperty(pages + 1, 1);
    setPages(pages + 1);
  };

  const fetchLessData = () => {
    getProperty(pages - 1, 1);
    setPages(pages - 1);
  };
  return (
    <>
      <div className="pagination_btn">
        <button onClick={() => fetchLessData()}>Prev</button>
        <p>
          {pages} of {nbPages}
        </p>
        <button onClick={() => fetchMoreData()}>Next</button>
      </div>
    </>
  );
}

export default Pagination;
