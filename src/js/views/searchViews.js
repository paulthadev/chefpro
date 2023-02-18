class SearchViews {
  #parentElement = document.querySelector(".search");

  getQuery() {
    const clear = this.#parentElement.querySelector(".search__field").value;
    this.#clearInput();
    return clear;
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchViews();
