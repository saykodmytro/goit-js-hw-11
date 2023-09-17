import createGalleryCard from '../templates/gallery-card.hbs';
import { PixabayAPI } from './pixabay-api';
import { galleryEl, loadMoreBtn, formEl } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  onError,
  onEmpty,
  addLoader,
  hideLoader,
  showMoreBtn,
  hideMoreBtn,
  messageTotalPhoto,
  messageLastPage,
  smoothScroll,
} from './function';

const pixabayApi = new PixabayAPI(40);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onMoreData);

async function onSubmit(evt) {
  evt.preventDefault();
  pixabayApi.page = 1;

  const searchQuery =
    evt.currentTarget.elements['user-search-query'].value.trim();
  pixabayApi.q = searchQuery;
  if (pixabayApi.q === '') {
    galleryEl.innerHTML = '';
    return onEmpty();
  }
  addLoader();

  try {
    const resp = await pixabayApi.getPhotos();
    galleryEl.innerHTML = createGalleryCard(resp.hits);
    lightbox.refresh();
    smoothScroll();
    if (resp.totalHits === 0) {
      hideMoreBtn();
      return onError();
    }

    messageTotalPhoto(resp.totalHits);
    resp.total > pixabayApi.perPage ? showMoreBtn() : hideMoreBtn();

    hideLoader();
  } catch (error) {
    hideLoader();
    console.log(error);
  }
}

async function onMoreData(evt) {
  pixabayApi.page += 1;

  try {
    const resp = await pixabayApi.getPhotos();
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCard(resp.hits));
    lightbox.refresh();
    smoothScroll();
    const lastPage = Math.ceil(resp.totalHits / pixabayApi.perPage);
    if (lastPage === pixabayApi.page) {
      console.log('message');
      messageLastPage();
    }
  } catch (error) {
    console.log(error);
  }
}
