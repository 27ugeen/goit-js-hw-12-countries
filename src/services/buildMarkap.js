import { refs } from '../utils/refs';

import countryDescription from '../templates/contry-description.hbs';
import countryList from '../templates/list-items.hbs';

function insertItem(item) {
  refs.card.insertAdjacentHTML('beforeend', item);
}

function deleteItem() {
  refs.card.innerHTML = '';
}

function buildDescriptionMarkup(item) {
  return countryDescription({ item });
}

function createList(items) {
  return countryList(items);
}

export { insertItem, deleteItem, buildDescriptionMarkup, createList };
