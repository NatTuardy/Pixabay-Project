// console.log('loadMore')

import { newForm } from "../serchForm/serchForm";

newForm.loadMoreButton = function () {
  console.log("hi");
  let imageContainer = document.querySelector(".more-button");
  imageContainer.insertAdjacentHTML("beforeend", '<button class="btn btn-success isHidden" id="success" type="button">Load more</button>');
  const loadMoreBtn = document.querySelector("#success");
  loadMoreBtn.addEventListener("click", () => {
    this.createRequest
      .render()
      .then((articles) => articles.json())
      .then((articles) => {
           this.createListItems.render(articles.hits)
           console.log(articles.hits)
      })
      .then(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
  });
};

newForm.loadMoreButton();
