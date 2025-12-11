import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const input = document.querySelector('.input');
const form = document.querySelector('.form');

iziToast.settings({
  timeout: 4000,
  position: 'topRight',
  transitionIn: 'fadeInRight',
  transitionOut: 'fadeOutRight',
});

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const search = input.value.trim();

  if (search === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  clearGallery();
  showLoader();

  // data.hits  - зображення
  searchImages(search)
    .then(data => {
      if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
        iziToast.error({
          title: 'Sorry',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      renderImages(data.hits);
      form.reset();
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
