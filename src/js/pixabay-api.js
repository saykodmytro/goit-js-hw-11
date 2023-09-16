import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '39430730-0a1aacc0e107061ec7cb5615a';

  constructor(perPage) {
    this.page = 1;
    this.q = null;
    this.perPage = perPage;
  }

  async getPhotos() {
    const resp = await axios.get(`${this.#BASE_URL}`, {
      params: {
        q: this.q,
        page: this.page,
        per_page: this.perPage,
        key: this.#API_KEY,
        image_type: 'photo',
        safesearch: 'true',
        orientation: 'horizontal',
      },
    });
    return resp.data;
  }
}
