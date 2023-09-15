import createGalleryCard from '../templates/gallery-card.hbs';
import { createCatInfo } from './createCard';
import { PixabayAPI } from './pixabay-api';
import { galleryEl, loadMoreBtn, loaderEl, formEl } from './refs';

const pixabayApi = new PixabayAPI(20);

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const searchQuery =
    evt.currentTarget.elements['user-search-query'].value.trim();
  console.log(searchQuery);

  if (!searchQuery) {
    return alert('Please enter some value!');
  }

  pixabayApi.q = searchQuery;

  pixabayApi.getPhotos().then(resp => {
    // galleryEl.innerHTML = createCatInfo(resp.hits);
    galleryEl.innerHTML = createGalleryCard(resp.hits);
  });
}
