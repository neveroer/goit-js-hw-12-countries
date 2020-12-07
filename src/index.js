import API from './fetchCountries';
import { htmlError, htmlResult, markupCountry, markupCountriesList } from './elements';
import { debounce } from 'lodash';

const searchInput = document.querySelector('.search-input');


function fetchSuccess(data) {
	htmlError(``);
  if (data.length > 10)
    htmlError(`Too many matches (${data.length}).`);
  else if (data.status === 404)
    htmlError(`No results.`);
  else if (data.length === 1)
    htmlResult(markupCountry(data[0]));
  else if (data.length <= 10)
    htmlResult(markupCountriesList(data));
}

function fetchError() {
    htmlResult(``);
    htmlError(`Some error occured.`);
}

// main

searchInput.addEventListener('input', debounce(e => {
  e.preventDefault();
  htmlResult('');
  htmlError(``);
  
  const searchQuery = e.target.value.trim();
  if (searchQuery.length === 0)
    return;

  API.fetchCountries(searchQuery)
      .then(fetchSuccess)
      .catch(fetchError);
}, 500));
