// https://pixabay.com/api/?key=39430730-0a1aacc0e107061ec7cb5615a&q="yellow+flower"&image_type=photo&orientation=horizontal&safesearch=true
//
// https://pixabay.com/api/
// key  39430730-0a1aacc0e107061ec7cb5615a
// q  'cat'
// image_type   "photo"
// orientation  "horizontal"
// safesearch  "true"
import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '39430730-0a1aacc0e107061ec7cb5615a';

  constructor(perPage) {
    this.page = 1;
    this.q = '';
    this.perPage = perPage;
  }

  getPhotos() {
    return axios
      .get(`${this.#BASE_URL}`, {
        params: {
          q: this.q,
          page: this.page,
          per_page: this.perPage,
          key: this.#API_KEY,
          image_type: 'photo',
          safesearch: 'true',
          orientation: 'horizontal',
        },
      })
      .then(resp => resp.data);
  }
}
