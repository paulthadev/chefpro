import icons from "url:../../img/icons.svg";
import Views from "./views";

class PaginationView extends Views {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    // 1. Page 1 and other pages
    if (currPage === 1 && numPages > 1) {
      return `
          <button data-goto="${
            currPage + 1
          }" class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1} of ${numPages}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
          </button>
      `;
    }
    // 3. Last Page
    if (currPage === numPages && numPages > 1) {
      return `
          <button data-goto="${
            currPage - 1
          }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currPage - 1}</span>
          </button>
      `;
    }
    // 4. Other Page
    if (currPage < numPages) {
      return `
       <button data-goto="${
         currPage - 1
       }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currPage - 1}</span>
          </button>

       <button data-goto="${
         currPage + 1
       }"class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1} of ${numPages}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
          </button>   
      `;
    }
    // 2. Page 1 and no other pages
    return ``;
  }
}

export default new PaginationView();
