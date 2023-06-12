import { getImages } from './getImages';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let queryToFetch = '';
let pageToFetch;

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

formEl.addEventListener('submit', onSubmitForm);
buttonLoadMore.addEventListener('click', onBtnLoadMoreClick);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSubmitForm(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value;
  if (!query.trim() || query === queryToFetch) {
    return;
  }
  queryToFetch = query;
  galleryEl.innerHTML = '';
  pageToFetch = 1;
  buttonLoadMore.classList.add('unvisible');
  getImages(queryToFetch, pageToFetch);
  formEl.reset();
}

function onBtnLoadMoreClick() {
  buttonLoadMore.classList.add('unvisible');
  pageToFetch += 1;
  getImages(queryToFetch, pageToFetch);
}

export { galleryEl, buttonLoadMore, lightbox };
