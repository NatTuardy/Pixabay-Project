
export default class CreateRequest {
	constructor(query) {
		this.q_url = query
		this.my_key = '22800416-015d794e55de2ad079b2ccfc6'
		this.page_url = 1
		this.url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.q_url}&page=${this.page_url}&per_page=12&key=${this.my_key}`
		this.incrementPage.bind(this)
	}
	render() {
		return fetch(this.url)
	   		.then((response)=> response.json())
	   		.then((image) => {
			this.incrementPage()
		   	return image.hits
			})		       
	} 
	incrementPage(){
		this.page_url +=1
	}		   	
}


