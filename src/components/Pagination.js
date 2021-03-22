import React from "react";

const Pagination = ({
  pageCount,
  currentPage,
  paginate,
  paginateNext,
  paginatePrev,
}) => {
  const pages = [];
  if (currentPage < 5) {
    for (let i = 1; i <= 9; i++) {
      pages.push(i);
    }
  } else if (currentPage > pageCount - 5) {
    for (let i = pageCount - 8; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    for (let i = currentPage - 4; i <= currentPage + 4; i++) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className="pagination">
        {currentPage > 1 && (
          <>
            <button
              onClick={() => {
                paginate(1);
              }}
            >
              First
            </button>
            <button
              onClick={() => {
                paginatePrev(currentPage - 1);
              }}
            >
              &laquo;
            </button>
          </>
        )}

        {pages.map((number) => (
          <div key={number}>
            <button
              className={number === currentPage ? "active" : ""}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </button>
          </div>
        ))}

        {currentPage !== pageCount && (
          <>
            <button
              onClick={() => {
                paginateNext(currentPage + 1);
              }}
            >
              &raquo;
            </button>
            <button
              onClick={() => {
                paginate(pageCount);
              }}
            >
              Last
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
