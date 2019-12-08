const baseURL = 'https://restcountries.eu/rest/v2/name/';

const fetchCountries = searchQuery => {
  return fetch(baseURL + searchQuery).then(response => response.json());
};

export { fetchCountries };
