import React from "react";
import css from "../../components/AdminPage/Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  startIndex,
}) {
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Генеруємо номери сторінок для відображення
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Показуємо всі сторінки якщо їх мало
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Логіка для багатьох сторінок
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={css.pagination}>
      <div className={css.info}>
        Showing {startIndex + 1} to {endIndex} of {totalItems} results
      </div>

      <div className={css.controls}>
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${css.btn} ${css.prevNext}`}
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className={css.pageNumbers}>
          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className={css.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`${css.btn} ${css.pageBtn} ${
                  currentPage === page ? css.active : ""
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${css.btn} ${css.prevNext}`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
