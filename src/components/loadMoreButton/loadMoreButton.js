import { newForm } from "../serchForm/serchForm";

newForm.loadMoreButton = function () {
  let imageContainer = document.querySelector(".more-button");
  imageContainer.insertAdjacentHTML("beforeend", '<button class="btn btn-success isHidden" id="success" type="button">Load more</button>');
  const loadMoreBtn = document.querySelector("#success");
  loadMoreBtn.addEventListener("click", () => {
    this.createRequest
      .render()
      .then((articles) => articles.json())
      .then((articles) => this.createListItems.render(articles.hits))
      .then(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
  });
};

newForm.loadMoreButton();
