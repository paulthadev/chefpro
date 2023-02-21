"strict mode";
import "core-js/stable";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeViews from "./views/recipeViews.js";
import searchViews from "./views/searchViews.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeViews.renderSpinner();

    // 1.) Loading Recipe
    await model.loadRecipe(id);

    // 2.) Rendering recipe
    recipeViews.render(model.state.recipe);
  } catch (error) {
    // console.error(error);
    recipeViews.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get Search Query
    const query = searchViews.getQuery();
    if (!query) return;

    // Load results
    await model.loadSearchResult(query);

    // Render Results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // Render initial Pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipeViews.addHandleRender(controlRecipes);
  searchViews.addHandlerSearch(controlSearchResults);
};
init();
