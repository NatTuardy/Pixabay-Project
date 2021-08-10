import { DocumentPosition } from 'domutils'
import CreateRequest from '../../services/services'

console.log('searchForm')

export default class SearchForm {
     #container

     constructor() {
          this.#container = document.createElement('div')
          this.createRequest = new CreateRequest()
     }

     render() {

          const mainContainer = document.querySelector('#main-container')

          const searchForm = document.createElement('form')
          searchForm.className = 'input-group input-group-lg w-50 p-3'
          searchForm.id = 'search-form'

          const searchFormInput = document.createElement('input')
          searchFormInput.className = 'form-control'
          searchFormInput.name = 'query'
          searchFormInput.type = 'text'
          searchFormInput.autocomplete = 'off'
          searchFormInput.placeholder = 'Search images...'

          const submitFormButton = document.createElement('button')
          submitFormButton.type = 'submit'
          submitFormButton.className = 'input-group-text'
          submitFormButton.id = 'basic-addon2'
          submitFormButton.textContent = 'SEARCH'

          searchForm.addEventListener('submit', (event) => {
               event.preventDefault();
               this.createRequest.resetPage()

               //чистим галерею
               // const galleryDiv = document.querySelector('.')
               // galleryDiv.remove()

               this.createRequest.setUrl(searchFormInput.value)

               // const getAnswer = async () => {
               
               //      try {
                         const response = this.createRequest.render()
                         console.log(response)
                         // if (!response.ok) {
                         //      throw new Error('Произошла ошибка в получении данных об альбомах...')
                         // }
                         // const result = await response.json()
                         
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
          })

          this.#container.append(searchForm)
          searchForm.append(searchFormInput, submitFormButton)     

          mainContainer.append(this.#container)
          // return this.#container
          
     }

}

const newForm = new SearchForm()
newForm.render()
