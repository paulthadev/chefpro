'strict mode';
import { async } from 'regenerator-runtime';
import { MODAL_CLOSE_SEC } from './config.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeViews from './views/recipeViews.js';
import searchViews from './views/searchViews.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksViews from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeViews.renderSpinner();

    // 0.) Update result view to mark selected result
    resultsView.update(model.getSearchResultPage());
    bookmarksViews.update(model.state.bookmark);

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

    // 2) Render Results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // Render initial Pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW Results
  resultsView.render(model.getSearchResultPage(goToPage));

  // Render CURRENT Pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // update the recipe view
  recipeViews.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1.) Add/ Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2.) Update the recipeview that is bookmarked
  recipeViews.update(model.state.recipe);

  // 3.) Render the Bookmark
  bookmarksViews.render(model.state.bookmark);
};

const controlBookmark = function () {
  bookmarksViews.render(model.state.bookmark);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // render Spinner
    addRecipeView.renderSpinner();

    // upload new Recipe Data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render Recipe
    recipeViews.render(model.state.recipe);

    // Display success message
    addRecipeView.renderMessage();

    // Render bookmark
    bookmarksViews.render(model.state.bookmark);

    // Change ID in Url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close Modal Window
    setTimeout(function () {
      addRecipeView.toggleWIndow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
    console.error('💥', error);
  }
};

const init = function () {
  bookmarksViews.addHandlerRender(controlBookmark);
  recipeViews.addHandlerRender(controlRecipes);
  recipeViews.addHandlerUpdateServings(controlServings);
  recipeViews.addHandlerAddBookmark(controlAddBookmark);
  searchViews.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};
init();
