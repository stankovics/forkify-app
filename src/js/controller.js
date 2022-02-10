import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'sass';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpiner();
    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpiner();
    // Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search
    await model.loadSearchResults(query);
    // Render results

    resultsView.render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function () {
  console.log('Pagination controller');
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
