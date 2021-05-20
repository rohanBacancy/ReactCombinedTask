import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FunctionComponent } from "react";

const LEFT_PAGE: string = "LEFT";
const RIGHT_PAGE: string = "RIGHT";

const range = (from: number, to: number, step = 1): Array<number> => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

interface Iprops {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  onPageChanged: (data: PaginationData) => void;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
}

const Pagination: FunctionComponent<Iprops> = ({
  totalRecords,
  pageLimit,
  pageNeighbours,
  onPageChanged,
}) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages: Array<number | string> = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const gotoPage = (page: number | string) => {
    const currentPage = Math.max(0, Math.min(Number(page), totalPages));
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    gotoPage(1);
  }, []);

  useEffect(() => {
    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    onPageChanged(paginationData);
  }, [currentPage]);

  const handleClick = (page: number | string) => {
    gotoPage(page);
  };

  const handleMoveLeft = () => {
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = () => {
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  if (!totalRecords || totalPages === 1) return null;

  const pages = fetchPageNumbers();

  return (
    <Fragment>
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <button
                    className="page-link"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              );

            return (
              <li
                key={index}
                className={`page-item${currentPage === page ? " active" : ""}`}
              >
                <button className="page-link" onClick={() => handleClick(page)}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;
