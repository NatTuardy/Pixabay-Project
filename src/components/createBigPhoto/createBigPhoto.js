class createBigPhoto {
     render(id, largePhoto) {
          let mainContainer = document.querySelector("#main-container");
          mainContainer.insertAdjacentHTML(
               "beforeend",
               `<div class="modal fade" id="img_${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" id="close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${largePhoto}" />
          </div>
        </div>
      </div>
    </div>`
          );
     }
}

export { createBigPhoto };
