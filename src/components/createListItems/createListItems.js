console.log("list");
import CreateRequest from "../../services/services";

class createListItems {
  render() {
    let imageContainer = document.createElement("div");
    imageContainer.className = "container-sm row row-cols-1 row-cols-md-3 g-4";
    imageContainer.id = "images";
    document.body.append(imageContainer);

    const newRequest = new CreateRequest();
    let apiData = newRequest.render();
    apiData.then((data) => {
      data.forEach((element) => {
        imageContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
    <img src="${element.largeImageURL}" class="card-img-top" alt="...">
    <div class="card-footer">
    <small class="text-muted">
    <i class="bi bi-heart">${element.likes}</i>
    <i class="bi bi-card-text">${element.comments}</i>
    <i class="bi bi-eye">${element.views}</i>
    <i class="bi bi-cloud-download">${element.downloads}</i>
    </small>
    </div>
    </div>`
        );
      });
    });
  }
}

export { createListItems };
