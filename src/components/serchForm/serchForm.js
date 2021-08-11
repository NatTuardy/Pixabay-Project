import { DocumentPosition } from "domutils";
import CreateRequest from "../../services/services";
import { createListItems } from "../createListItems/createListItems";

console.log("searchForm");

class SearchForm {
  #container;

  constructor() {
    this.#container = document.createElement("div");
    this.createRequest = new CreateRequest();
    this.createListItems = new createListItems();
  }

  render() {
    const mainContainer = document.querySelector("#main-container");

    const searchForm = document.createElement("form");
    searchForm.className = "input-group input-group-lg w-50 p-3";
    searchForm.id = "search-form";

    const searchFormInput = document.createElement("input");
    searchFormInput.className = "form-control";
    searchFormInput.name = "query";
    searchFormInput.type = "text";
    searchFormInput.autocomplete = "off";
    searchFormInput.placeholder = "Search images...";

    const submitFormButton = document.createElement("button");
    submitFormButton.type = "submit";
    submitFormButton.className = "input-group-text";
    submitFormButton.id = "basic-addon2";
    submitFormButton.textContent = "SEARCH";

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.createRequest.resetPage();

      const galleryDiv = document.querySelector("#images");
      const hideGallery = document.querySelector(".gallery-main");
      const loadBtn = document.querySelector("#success");

      hideGallery.classList.remove("isHidden");
      loadBtn.classList.remove("isHidden");

      if (hideGallery) {
        hideGallery.textContent = "";
      }

      this.createRequest.setUrl(searchFormInput.value);
      searchFormInput.value = "";

      const result = this.createRequest.render();

      result
        .then((response) => response.json())

        .then((image) => {
          this.createListItems.render(image.hits);
        });
    });

    this.#container.append(searchForm);
    searchForm.append(searchFormInput, submitFormButton);

    mainContainer.append(this.#container);
  }
}

export const newForm = new SearchForm();
newForm.render();
