import { Notify } from 'notiflix';
import { loaderEl, loadMoreBtn } from './refs';

export function messageTotalPhoto(obj) {
  return Notify.success(`Hooray! We found ${obj} images.`);
}

export function onError() {
  loaderEl.classList.remove('active');
  return Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
export function messageLastPage() {
  loadMoreBtn.classList.add('is-hidden');
  return Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}

export function onEmpty() {
  loaderEl.classList.remove('active');
  return Notify.warning('Input is empty');
}

export function addLoader() {
  loaderEl.classList.add('active');
}

export function hideLoader() {
  loaderEl.classList.remove('active');
}

export function hideMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

export function showMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}
