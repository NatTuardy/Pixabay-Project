export default class CreateRequest {
  constructor() {
    this.q_url = "";
    this.my_key = "22800416-015d794e55de2ad079b2ccfc6";
    this.page_url = 1;
    this.url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=&page=1&per_page=12&key=${this.my_key}`;
    this.incrementPage.bind(this);
  }
  render() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.q_url}&page=${this.page_url}&per_page=12&key=${this.my_key}`;
    this.incrementPage();
    return fetch(url);
  }
  incrementPage() {
    this.page_url += 1;
  }
  resetPage() {
    this.page_url = 1;
  }
  setUrl(url) {
    this.q_url = url;
  }
}
