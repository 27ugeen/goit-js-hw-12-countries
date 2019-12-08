import {
  messageNeedInput,
  messageBadInput,
  noCountriesFound,
  messageTakeResult,
} from './utils/pnotify';

import debounce from 'lodash.debounce';

import { refs } from './utils/refs';
import { fetchCountries } from './services/fetchCountries';

import {
  insertItem,
  deleteItem,
  buildDescriptionMarkup,
  createList,
} from './services/buildMarkap';

function searchFromInput(event) {
  event.preventDefault();

  const searchQuery = event.target.value;
  if (searchQuery === '') {
    messageNeedInput();
    deleteItem();
  }
  fetchCountries(searchQuery).then(data => {
    if (data.status === 404) {
      noCountriesFound();
      deleteItem();
      return;
    }
    if (data.length > 10) {
      messageBadInput();
      deleteItem();
    } else if (data.length >= 2 && data.length <= 10) {
      console.log(data);
      deleteItem();
      const listItems = createList(data);
      insertItem(listItems);
    } else {
      messageTakeResult();
      console.log(data);
      deleteItem();
      const markup = buildDescriptionMarkup(data[0]);
      insertItem(markup);
    }
  });
}

refs.input.addEventListener('input', debounce(searchFromInput, 500));
