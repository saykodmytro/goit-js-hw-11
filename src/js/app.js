import createGalleryCard from '../templates/gallery-card.hbs';
import { PixabayAPI } from './pixabay-api';
import { galleryEl, loadMoreBtn, loaderEl, formEl } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  onError,
  addLoader,
  hideLoader,
  showMoreBtn,
  hideMoreBtn,
  messageTotalPhoto,
} from './function';

const pixabayApi = new PixabayAPI(40);

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onMoreData);

async function onSubmit(evt) {
  evt.preventDefault();
  pixabayApi.page = 1;

  const searchQuery =
    evt.currentTarget.elements['user-search-query'].value.trim();

  if (!searchQuery) {
    onError();
  }

  addLoader();

  pixabayApi.q = searchQuery;

  try {
    const resp = await pixabayApi.getPhotos();
    galleryEl.innerHTML = createGalleryCard(resp.hits);
    if (getPhoto.query === '') {
      Notify.warning('input is empty');
      return;
    }
    messageTotalPhoto(resp.totalHits);
    resp.total > pixabayApi.perPage ? showMoreBtn() : hideMoreBtn();

    hideLoader();

    const lightbox = new SimpleLightbox('.gallery-img', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } catch (error) {
    console.log(error);
  }
}

async function onMoreData(evt) {
  pixabayApi.page += 1;

  try {
    const resp = await pixabayApi.getPhotos();
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCard(resp.hits));
    const averagePage = Math.ceil(resp.total / pixabayApi.perPage);
    if (averagePage === pixabayApi.page) {
      hideMoreBtn();
    }

    const lightbox = new SimpleLightbox('.gallery-img', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } catch (error) {
    console.log(error);
  }
}
