"strict mode";
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeViews from "./views/recipeViews.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeViews.renderSpinner();
    // 0. Load Search Result
    await model.loadSearchResult("pizza");

    // 1.) Loading Recipe
    await model.loadRecipe(id);

    // 2.) Rendering recipe
    recipeViews.render(model.state.recipe);
  } catch (error) {
    // console.error(error);
    recipeViews.renderError();
  }
};
const init = function () {
  recipeViews.addHandleRender(controlRecipes);
};
init();
