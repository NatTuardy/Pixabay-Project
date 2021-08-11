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
      // console.log(galleryDiv)
      if (galleryDiv) {
        galleryDiv.remove();
      }

      this.createRequest.setUrl(searchFormInput.value);
      searchFormInput.value = "";

      // const getAnswer = async () => {

      //      try {
      const result = this.createRequest.render();
      // console.log('response', response)
      result
        .then((response) => response.json())
        // console.log(response)
        .then((image) => {
          // console.log(image.hits)
          this.createListItems.render(image.hits);
        });

      // console.log('data', data)
      // setTimeout(() => {
      //      this.createListItems.render(data)
      // }, 2000)

      // if (!response.ok) {
      //      throw new Error('Произошла ошибка в получении данных об альбомах...')
      // }
      // .then((response) => response.json())
      // console.log(response)

      // result.forEach((album) => {
      //      const albumHTML = createAlbumElement(album.title)
      //      dataContainer.append(albumHTML)
      // })
      // }
      // catch(error) {
      //      console.log ('error', error)
      // }
      // finally {
      //      console.log ('finally')
      //      toggleLoader()
      // }
      // }

      // getAnswer()
    });

    this.#container.append(searchForm);
    searchForm.append(searchFormInput, submitFormButton);

    mainContainer.append(this.#container);
    // return this.#container
  }
}

export const newForm = new SearchForm();
newForm.render();

// newForm.sayHi = function () {
//   console.log("hi");
//   let imageContainer = document.querySelector("#main-container");
//   imageContainer.insertAdjacentHTML(
//     "beforeend",
//     '<div class="d-grid gap-2 col-6 mx-auto"><button class="btn btn-success" id="loadMore" type="button">Load more</button></div>'
//   );
//   const loadMoreBtn = document.querySelector("#loadMore");
//   loadMoreBtn.addEventListener("click", () => {
//     this.createRequest
//       .render()
//       .then((articles) => articles.json())
//       .then((articles) => this.createListItems.render(articles.hits)).then(()=> {
//           window.scrollTo({
//               top: document.body.scrollHeight,
//               behavior: 'smooth',
//           })
//       });
//   });
// };

// newForm.sayHi();
