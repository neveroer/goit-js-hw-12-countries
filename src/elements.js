import countryTmpl from '../templates/country.hbs';
import countriesListTmpl from '../templates/countriesList.hbs';

const errorLabel = document.querySelector('.result-error');
const results = document.querySelector('.result');


function htmlError(msg) {
	errorLabel.innerHTML = msg;
}

function htmlResult(msg) {
  results.innerHTML = msg;
}

function markupCountry(obj) {
	return countryTmpl(obj);
}

function markupCountriesList(lst) {
	return countriesListTmpl(lst)
}

export { htmlError, htmlResult, markupCountry, markupCountriesList };