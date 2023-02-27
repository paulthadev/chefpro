import icons from "url:../../img/icons.svg";
import previewView from "./previewView";
import Views from "./views";

class ResultsView extends Views {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again :)";
  _message = "";

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();
