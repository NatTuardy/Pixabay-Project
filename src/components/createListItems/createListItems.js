import { createBigPhoto } from "../createBigPhoto/createBigPhoto";

class createListItems {
     render(data) {
          let imageContainer = document.querySelector("#images1");
          data.forEach((element) => {
               let BigPhoto = new createBigPhoto();
               BigPhoto.render(element.id, element.largeImageURL);
               imageContainer.insertAdjacentHTML(
                    "beforeend",
                    `<button type="button"  id="modal-window" data-bs-toggle="modal" data-bs-target="#img_${element.id}"><div class="card">
    <img src="${element.largeImageURL}" class="card-img-top" alt="...">
    <div class="card-footer">
    <small class="text-muted">
    <i class="bi bi-heart"> ${element.likes}</i>
    <i class="bi bi-card-text"> ${element.comments}</i>
    <i class="bi bi-eye"> ${element.views}</i>
    <i class="bi bi-cloud-download"> ${element.downloads}</i>
    </small>
    </div>
    </div></button>`
               );
          });
     }
}

export { createListItems };
