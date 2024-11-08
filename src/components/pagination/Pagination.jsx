const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          disabled={currentPage === index + 1}
          style={{
            padding: "8px 16px",
            margin: "0 4px",
            backgroundColor: currentPage === index + 1 ? "var(--orange-color)" : "var(--white-90-color)",
            color: currentPage === index + 1 ? "var(--white-90-color)" : "var(--black-80-color)",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};

export default Pagination;
