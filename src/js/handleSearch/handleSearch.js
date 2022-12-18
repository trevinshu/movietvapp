import removePreLoadedContent from '../removePreLoadedContent/removePreLoadedContent';
require('dotenv').config();
const apiKey = process.env.API_KEY;
import resultMsg from '../resultMessage/resultMessage';
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('container');
const searchContainer = document.getElementById('searchContainer');
const msgContainer = document.getElementById('msgContainer');
const searchLoader = document.getElementById('searchLoader');

//Handle Search Click
const handleSearch = searchBtn.addEventListener('click', (e) => {
  const input = searchInput.value;
  removePreLoadedContent();
  searchContainer.remove();
  msgContainer.remove();
  searchLoader.classList.add('showLoader');
  setTimeout(function () {
    getMoviesAndShowsBySearch(input);
  }, 1000);
  e.preventDefault();
});

//Draw Content For Search Input
async function getMoviesAndShowsBySearch(searchInput) {
  let response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  const searchArray = results.filter((res) => res.known_for_department !== 'Directing' && res.known_for_department !== 'Acting');
  container.append(msgContainer);
  container.append(searchContainer);
  searchLoader.classList.remove('showLoader');

  let html = '';
  try {
    if (data.total_results !== 0) {
      searchArray.forEach((item) => {
        html += `
      <div class="searchItem" data-id="${item.id}" data-type="${item.media_type}">
          <a href="#" id="viewItem" class="viewItem">
            ${
              item.backdrop_path
                ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>`
                : '<h4 class="emptyImgMsg">No Poster Available For This Movie/Show</h4>'
            }
          </a>
          <h4>${item.title ? item.title : item.name}</h4>
      </div>
    `;
        resultMsg('searchHeading', `Search Results For <span>${searchInput}</span>:`);
        searchContainer.innerHTML = html;
        removePreLoadedContent();
      });
    } else {
      resultMsg('searchHeading', `No Results Found For <span>${searchInput}</span>:`);
      searchContainer.innerHTML = '';
    }
  } catch (err) {
    console.log(err);
  }
}

export default handleSearch;
