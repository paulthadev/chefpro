"strict mode";
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeViews.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    // 1.) Loading Recipe
    await model.loadRecipe(id);

    // 2.) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    // console.error(error);
    alert(error);
  }
};
["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
