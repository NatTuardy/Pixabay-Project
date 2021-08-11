<<<<<<< HEAD
=======

>>>>>>> fc54153ace2ad32dee4eafb5f256507384f6cd8d
console.log("list");
import CreateRequest from "../../services/services";
import { createBigPhoto } from "../createBigPhoto/createBigPhoto";

class createListItems {

  render(data) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "container-sm row row-cols-1 row-cols-md-3 g-4";
    imageContainer.id = "images";
    document.body.append(imageContainer);

    // const newRequest = new CreateRequest();
    // let apiData = newRequest.render();
    // response.then((data) => {
       console.log('listItem data', data);
      data.forEach((element) => {
        let BigPhoto = new createBigPhoto();
        BigPhoto.render(element.id, element.largeImageURL);

        imageContainer.insertAdjacentHTML(
          "beforeend",
          `<button type="button"  id="modal-window" data-bs-toggle="modal" data-bs-target="#img_${element.id}"><div class="card">
    <img src="${element.largeImageURL}" class="card-img-top" alt="...">
    <div class="card-footer">
    <small class="text-muted">
    <i class="bi bi-heart">${element.likes}</i>
    <i class="bi bi-card-text">${element.comments}</i>
    <i class="bi bi-eye">${element.views}</i>
    <i class="bi bi-cloud-download">${element.downloads}</i>
    </small>
    </div>
    </div></button>`
        );
        //let bPhoto = document.querySelector(`#${element.user}_${element.id}"`);
        //imageContainer.append(bPhoto);
        //console.log(bPhoto);
      });
    // });
  }
}

export { createListItems };
<<<<<<< HEAD
=======

>>>>>>> fc54153ace2ad32dee4eafb5f256507384f6cd8d
