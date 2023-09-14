// https://pixabay.com/api/?key=39430730-0a1aacc0e107061ec7cb5615a&q="yellow+flower"&image_type=photo&orientation=horizontal&safesearch=true
//
// https://pixabay.com/api/
// key  39430730-0a1aacc0e107061ec7cb5615a
// q  'cat'
// image_type   "photo"
// orientation  "horizontal"
// safesearch  "true"

import { PixabayAPI } from './js/pixabay-api';

const paxabayApi = new PixabayAPI();
paxabayApi.getPhotos().then(console.log);
