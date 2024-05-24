# ChefPro

### Project Introduction

ChefPro is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.

### Live Preview

✅[Live Preview](https://chefpro.vercel.app/)


## Overview

![overview](https://github.com/paulthadev/chefpro/blob/main/overview.png?raw=true)

### Technologies used

This app is built with pure vanilla JavaScript along with HTML and SCSS. It uses webpack as module bundler and NPM as package manager.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)

### External libraries and APIs:

- Parcel
- Sass
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)
- [Forkify-API](https://forkify-api.herokuapp.com/v2)

### Ways to reproduce

- `npm i`
- `npm start`
- `npm run build`

<!-- GETTING STARTED -->

## Getting Started

To get started with project just simply fork this repo or download locally on your System.

To get a local copy up and running follow these simple example steps.

### Prerequisites

Start with the latest version of NPM to avoid any errors:

- npm
  ```sh
  npm install npm@latest -g
  ```
  ### Installation

1. Get a free API Key at [Forkify API_KEY](https://forkify-api.herokuapp.com/v2)
2. Clone the repo
   ```sh
   git clone https://github.com/paulthadev/foodrecipy.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const KEY = 'ENTER YOUR API';
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. The ChefPro Recipe App allows users to search for recipes.

2. Users can view the recipe along with the cook time and also
   increase or decrease the amount of servings they need.

3. Bookmarked recipes are stored in local storage so no database was
   required for this application.

_For more examples, please refer to the [Documentation](https://forkify-api.herokuapp.com/v2)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/paulthadev/chefpro/issues) for a list of proposed features (and known issues).

### Proposed Features

1. Number of pages between the pagination buttons.

2. Ability to sort search results by duration or number of ingredients.

3. Ingredient validation in view, before submitting the form.

4. Improving recipe ingredient input: separate in multiple fields and allow more than 6 ingredients.

5. Shopping list feature: button on recipe to add ingredients to a list.

6. Weekly meal planning feature: assign recipes to the next 7 days and showon a weekly calendar.

7. Nutrition data on each ingredient from spoonacular API (https://spoonacular.com/food-api) and calculate total calories of recipe.

### Implemented Features

1. Number of pages between the pagination buttons.
