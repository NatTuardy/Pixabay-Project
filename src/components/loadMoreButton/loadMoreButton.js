// console.log('loadMore')
 
import {newForm} from '../serchForm/serchForm'

newForm.sayHi = function () {
    console.log("hi");
    let imageContainer = document.querySelector("#main-container");
    imageContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="d-grid gap-2 col-6 mx-auto"><button class="btn btn-success" id="loadMore" type="button">Load more</button></div>'
    );
    const loadMoreBtn = document.querySelector("#loadMore");
    loadMoreBtn.addEventListener("click", () => {
      this.createRequest
        .render()
        .then((articles) => articles.json())
        .then((articles) => this.createListItems.render(articles.hits)).then(()=> {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            })
        });
    });
  };
  
  newForm.sayHi();
  