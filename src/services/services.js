
export default class CreateRequest {
	constructor() {
		this.q_url = ''
		this.my_key = '22800416-015d794e55de2ad079b2ccfc6'
		this.page_url = 1
		this.url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=&page=1&per_page=12&key=${this.my_key}`
		this.incrementPage.bind(this)
	}
	render() {
		console.log(this.q_url)
		console.log(this.page_url)
		const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.q_url}&page=${this.page_url}&per_page=12&key=${this.my_key}`
		this.incrementPage()
		return fetch(url)
	   		// .then((response)=> response.json())
	   		// .then((image) => {
			// 	this.incrementPage()
			// 	return image.hits
				// image.hits = image.hits.map( item => (
				// 	result.push( {
				// 		id: item.id,
				// 		largeImageURL: item.largeImageURL,
				// 		likes: item.likes,
				// 		comments: item.comments,
				// 		views: item.views,
				// 		downloads: item.downloads
				// 		} )
				// ))

			// })
		// console.log('result', result)
		// return result				
	} 
	incrementPage(){
		this.page_url +=1
	}
    	resetPage(){
        this.page_url = 1 
    	}
    	setUrl(url){
        this.q_url = url 
    	}

}


