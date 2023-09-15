import { Notify } from 'notiflix';
import { loaderEl, loadMoreBtn } from './refs';

export function messageTotalPhoto(obj) {
  return Notify.success(`Hooray! We found ${obj} images.`);
}

export function onError() {
  return Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

export function onEmpty() {
  return Notify.warning('Input is empty');
}

export function addLoader() {
  loaderEl.classList.add('active');
}

export function hideLoader() {
  loaderEl.classList.remove('active');
  console.log('hideLoader');
}

export function hideMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

export function showMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}
