import React from "react";
import ReactPaginate from "react-paginate";

function CharacterFooter({ handlePageClick, pageCount }) {
  return (
    <>
      <ReactPaginate
        previousLabel={"<< π¦ΈββοΈ"}
        nextLabel={"π¦Έ >>"}
        breakLabel={" βββ "}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={(e) => handlePageClick(e)}
        containerClassName={"paginateBtns"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export default CharacterFooter;
