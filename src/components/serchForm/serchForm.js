console.log('searchForm')

export default class SearchForm {
     #container

     constructor() {
          
          this.#container = document.createElement('div')

     }

     render() {

          const searchForm = document.createElement('form')
          searchForm.className = 'input-group input-group-lg w-50 p-3'
          searchForm.id = 'search-form'

          const searchFormInput = document.createElement('input')
          searchFormInput.className = 'form-control'
          searchFormInput.name = 'query'
          searchFormInput.type = 'text'
          searchFormInput.autocomplete = 'off'
          searchFormInput.placeholder = 'Search images...'

          const spanFormButton = document.createElement('span')
          spanFormButton.className = 'input-group-text'
          spanFormButton.id = 'basic-addon2'
          spanFormButton.textContent = 'SEARCH'

          this.#container.append(searchForm)
          searchForm.append(searchFormInput, spanFormButton)       

          return this.#container

          }
     
}
