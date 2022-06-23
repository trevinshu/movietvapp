require('dotenv').config();
const apiKey = process.env.API_KEY;

//Get Containers/Items/Buttons
const trendingContainer = document.getElementById('trending');
const searchContainer = document.getElementById('searchContainer');
const movieContainer = document.querySelectorAll('.movieContainer');
const tvContainer = document.querySelectorAll('.tvContainer');
const actionMovies = document.getElementById('actionMovies');
const comedyMovies = document.getElementById('comedyMovies');
const horrorMovies = document.getElementById('horrorMovies');
const romanceMovies = document.getElementById('romanceMovies');
const thrillerMovies = document.getElementById('thrillerMovies');
const actionTv = document.getElementById('actionTv');
const comedyTv = document.getElementById('comedyTv');
const documentaryTv = document.getElementById('documentaryTv');
const dramaTv = document.getElementById('dramaTv');
const familyTv = document.getElementById('familyTv');
const kidsTv = document.getElementById('kidsTv');
const realityTv = document.getElementById('realityTv');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const toggleColorScheme = document.getElementById('toggleColorScheme');
const button = document.getElementById('colorModeIcon');
const container = document.getElementById('container');
let lightMode = localStorage.getItem('lightMode');
const modalContainer = document.getElementById('modalContainer');
let footer = document.getElementById('footer');
const modalInfo = document.getElementById('modalContent');
const msgContainer = document.getElementById('msgContainer');
const searchLoader = document.getElementById('searchLoader');

//Event Listeners
trendingContainer.addEventListener('click', viewSelectedMovieTvItem);
actionTv.addEventListener('click', viewSelectedTvItem);
comedyTv.addEventListener('click', viewSelectedTvItem);
documentaryTv.addEventListener('click', viewSelectedTvItem);
dramaTv.addEventListener('click', viewSelectedTvItem);
familyTv.addEventListener('click', viewSelectedTvItem);
kidsTv.addEventListener('click', viewSelectedTvItem);
realityTv.addEventListener('click', viewSelectedTvItem);
actionMovies.addEventListener('click', viewSelectedMovieItem);
comedyMovies.addEventListener('click', viewSelectedMovieItem);
horrorMovies.addEventListener('click', viewSelectedMovieItem);
romanceMovies.addEventListener('click', viewSelectedMovieItem);
thrillerMovies.addEventListener('click', viewSelectedMovieItem);
modalInfo.addEventListener('click', closeModal);
searchContainer.addEventListener('click', viewSelectedMovieTvItem);

document.addEventListener('DOMContentLoaded', function () {
  searchContainer.remove();
  msgContainer.remove();
  // searchLoader.remove();
});

//Enable Light Mode
const enableLightMode = () => {
  document.body.classList.add('light');
  button.classList.add('fa-moon');
  button.classList.remove('fa-sun');
  localStorage.setItem('lightMode', 'enabled');
};

//Disable Light Mode
const disableLightMode = () => {
  document.body.classList.remove('light');
  button.classList.remove('fa-moon');
  button.classList.add('fa-sun');
  localStorage.setItem('lightMode', null);
};

//Load Light Mode If Enabled On Previous Visit
if (lightMode === 'enabled') {
  enableLightMode();
}

//Toggle Light Mode On/Off
toggleColorScheme.addEventListener('click', (e) => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
  e.preventDefault();
});

//Handle Search Click
searchBtn.addEventListener('click', (e) => {
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

//Draw Message For Search Result
function resultMsg(className, msg) {
  let resultMsg = `<h2 class="${className}">${msg}</h2>`;
  msgContainer.innerHTML = resultMsg;
}

//Remove Pre-Loaded Content For Search Results
function removePreLoadedContent() {
  movieContainer.forEach((movieContainers) => {
    movieContainers.remove();
  });

  tvContainer.forEach((tvContainers) => {
    tvContainers.remove();
  });
}

//Get Trending Movies
async function getTrendingMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="trendingItem" data-id="${item.id}" data-type="${item.media_type}">
            <a href="#" id="viewItem" class="viewItem">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie/Show</h4>'}
            </a>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    trendingContainer.innerHTML = html;
  });
}
getTrendingMovies();

//Function to View Selected Movie/TV Show
function viewSelectedMovieTvItem(e) {
  const imgBtn = e.target.parentElement.parentElement;
  const type = imgBtn.dataset.type;
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}

//Function to View Selected Movie/TV Show
function viewSelectedTvItem(e) {
  const imgBtn = e.target.parentElement;
  const type = 'tv';
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}

function viewSelectedMovieItem(e) {
  const imgBtn = e.target.parentElement;
  const type = 'movie';
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}

//API Call to Get Movie/Show Info
async function getInfo(type, id) {
  if (type === 'tv') {
    let response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
    let data = await response.json();

    let responseTwo = await fetch(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${apiKey}`);
    let rating = await responseTwo.json();

    let responseThree = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`);
    let cast = await responseThree.json();

    showTvModal(data, rating, cast);
  } else {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    let data = await response.json();

    let responseTwo = await fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`);
    let rating = await responseTwo.json();

    let responseThree = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
    let cast = await responseThree.json();

    showMovieModal(data, rating, cast);
  }
}

//Close Modal
function closeModal(e) {
  if (e.target.parentElement.classList.contains('closeModal')) {
    modalContainer.classList.remove('showModal');
    document.body.style.overflow = 'scroll';
    footer.style.visibility = 'visible';
  }
  e.preventDefault();
}

//Function to display tv show info in modal
function showTvModal(info, rating, cast) {
  modalContainer.classList.add('showModal');
  document.body.style.overflow = 'hidden';
  footer.style.visibility = 'hidden';

  try {
    const tvRating = rating.results;
    const findUSRating = tvRating?.find((item) => item.iso_3166_1 === 'US');
    const runtime =
      info.episode_run_time.length > 0
        ? Math.floor(info.episode_run_time[0] / 60) + ' Hours' + ' & ' + (info.episode_run_time[0] % 60) + ' Minutes '
        : `No episode runtime info available for this show`;
    let html = `
    <div class="modalHeader">
      <h2>${info.name ? info.name : info.title}</h2>
      <button id="closeModal" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="showTags">
      <p><span>Seasons:</span> ${info.number_of_seasons > 0 ? info.number_of_seasons : `No Season Info Available for this show`}</p>
      <p><span>Rating:</span> ${info.vote_average > 0 ? `${info.vote_average * 10}%` : 'No Rating Available for this show'}</p>
      <p><span>Runtime:</span> ${runtime ? runtime : `No episode runtime info available for this show`}</p>
      <p><span>Genre:</span>${info.genres[0] ? info.genres.map((tag) => ` ${tag.name}`) : ` No Genre Info Available For This Show`}</p>
      <p><span>Content Rating: </span>${findUSRating ? findUSRating?.rating : `No Content Rating Available For This Show`}</p>
    </div>
    <div class="innerContent">
      ${
        info.poster_path
          ? `<img src="https://image.tmdb.org/t/p/original/${info.poster_path}" loading="lazy" alt="movie poster" class="poster"/>`
          : '<p class="postError">No Poster Available For This Movie/Show</p>'
      }
      <div class="innerContentInfo">
        <div class="description">
          <h3>Description:</h3>
          <p>${info.overview ? info.overview : `No Overview Available For This Show`}</p>
        </div>
        <div class="cast">
          <h3>Cast:</h3>
          <div class="castContainer">
          ${
            cast.cast[0]
              ? cast.cast
                  .slice(0, 15)
                  .map((actor) => `<div class="castItem"><p>${actor.name} as <span>${actor.character ? actor.character : `N/A</span>`}</p></div>`)
                  .join('')
              : `<p>No Cast Info Available</p>`
          }
          </div>
        </div>
        <div class="creator">
          <h3>Created By:</h3>
          <p>${info.created_by[0] ? info.created_by.map((tag) => `${tag.name}`).join(' & ') : `No Creator Info Available For This Show`}</p>
        </div>
      </div>
    </div>
  `;
    modalInfo.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

function showMovieModal(info, rating, cast) {
  modalContainer.classList.add('showModal');
  document.body.style.overflow = 'hidden';
  footer.style.visibility = 'hidden';

  try {
    const movieRating = rating.results;
    const findUSRating = movieRating?.find((item) => item.iso_3166_1 === 'US');
    const ratingArray = findUSRating?.release_dates.filter((item) => item.certification);

    const runtime = Math.floor(info.runtime / 60) + ' Hour ' + ' & ' + (info.runtime % 60) + ' Minutes ';

    const director = cast.crew.find((member) => member.job === 'Director');
    let html = `
  <div class="modalHeader">
    <h2>${info.name ? info.name : info.title}</h2>
    <button id="closeModal" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="showTags">
    <p><span>Release Date:</span> ${info.release_date ? info.release_date : `No release date available for this movie`}</p>
    <p><span>Rating:</span> ${info.vote_average > 0 ? `${info.vote_average * 10}%` : `No rating available for this movie`}</p>
    <p><span>Runtime:</span> ${runtime ? runtime : `Runtime Not Available For This Movie.`}</p>
    <p><span>Genre:</span>${info.genres[0] ? info.genres.map((tag) => ` ${tag.name}`) : ` No Genre Info Available For This Show`}</p>
    <p><span>Rating: </span>${ratingArray?.length > 0 && ratingArray[0].certification !== 'NR' ? ratingArray[0].certification : `No content rating Available For This Movie`}</p>
  </div>
  <div class="innerContent">
    ${
      info.poster_path
        ? `<img src="https://image.tmdb.org/t/p/original/${info.poster_path}" loading="lazy" alt="movie poster" class="poster"/>`
        : '<p class="postError">No Poster Available For This Movie/Show</p>'
    }
    <div class="innerContentInfo">
      <div class="description">
        <h3>Description:</h3>
        <p>${info.overview ? info.overview : `No Overview Available For This Movie`}</p>
      </div>
      <div class="cast">
        <h3>Cast:</h3>
        <div class="castContainer">
        ${
          cast.cast[0]
            ? cast.cast
                .slice(0, 15)
                .map((actor) => `<div class="castItem"><p>${actor.name} as <span>${actor.character ? actor.character : `N/A</span>`}</p></div>`)
                .join('')
            : `<p>No Cast Info Available</p>`
        }
        </div>
      </div>
      <div class="creator">
        <h3>Directed By:</h3>
        <p>${director ? director.name : 'No Director Info Available For This Movie'}</p>
      </div>
    </div>
  </div>
`;
    modalInfo.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

//Get Action Movies
async function getActionMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&without_genres=35%2C%2027%2C%2010749%2C%2053`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    actionMovies.innerHTML = html;
  });
}
getActionMovies();

//Get Comedy Movies
async function getComedyMovies() {
  let response = await fetch(`
  https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35&without_genres=28%2C%2027%2C%2010749%2C%2053`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';

  try {
    results.forEach((item) => {
      html += `
        <div class="movieItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
      comedyMovies.innerHTML = html;
    });
  } catch (error) {
    if (results === null) {
      console.log('No Results Found');
    }
  }
}
getComedyMovies();

//Get Horror Movies
async function getHorrorMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27&without_genres=28%2C%2035%2C%2010749%2C%2053`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    horrorMovies.innerHTML = html;
  });
}
getHorrorMovies();

//Get Romance Movies
async function getRomanceMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749&without_genres=27%2C%20%2053%2C%2028`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    romanceMovies.innerHTML = html;
  });
}
getRomanceMovies();

//Get Thriller Movies
async function getThrillerMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=53&without_genres=27%2C%2028%2C%2035%2C%2010749`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    thrillerMovies.innerHTML = html;
  });
}
getThrillerMovies();

//Get Action TV
async function getActionTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10759&without_genres=35%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    actionTv.innerHTML = html;
  });
}
getActionTv();

//Get Comedy TV
async function getComedyTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=35&without_genres=10759%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    comedyTv.innerHTML = html;
  });
}
getComedyTv();

//Get Documentary TV
async function getDocumentaryTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=99&without_genres=10759%2C%2035%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    documentaryTv.innerHTML = html;
  });
}
getDocumentaryTv();

//Get Drama TV
async function getDramaTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=18&without_genres=10759%2C%2035%2C%2099%2C%2010751%2C10762%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    dramaTv.innerHTML = html;
  });
}
getDramaTv();

//Get Family TV
async function getFamilyTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10751&without_genres=10759%2C%2035%2C%2099%2C%2018%2C10762%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    familyTv.innerHTML = html;
  });
}
getFamilyTv();

//Get Kids TV
async function getKidsTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10762&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10763%2C10764%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    kidsTv.innerHTML = html;
  });
}
getKidsTv();

//Get Reality TV
async function getRealityTv() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10764&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10762%2C10767`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    realityTv.innerHTML = html;
  });
}
getRealityTv();

//Arrow Btn Scroll Carousel
function carousel() {
  let leftBtn = document.querySelectorAll('#leftButton');
  let rightBtn = document.querySelectorAll('#rightButton');

  leftBtn.forEach((leftButton) =>
    leftButton.addEventListener('click', (e) => {
      const leftParent = e.target.parentElement;
      if (leftParent.dataset.button === 'trending left') {
        e.preventDefault();
        trendingContainer.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'action left') {
        e.preventDefault();
        actionMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'comedy left') {
        e.preventDefault();
        comedyMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'horror left') {
        e.preventDefault();
        horrorMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'romance left') {
        e.preventDefault();
        romanceMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'thriller left') {
        e.preventDefault();
        thrillerMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'action tv left') {
        e.preventDefault();
        actionTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'comedy tv left') {
        e.preventDefault();
        comedyTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'documentary tv left') {
        e.preventDefault();
        documentaryTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'drama tv left') {
        e.preventDefault();
        dramaTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'family tv left') {
        e.preventDefault();
        familyTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'kids tv left') {
        e.preventDefault();
        kidsTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'reality tv left') {
        e.preventDefault();
        realityTv.scrollLeft -= window.outerWidth;
      }
    })
  );

  rightBtn.forEach((rightButton) =>
    rightButton.addEventListener('click', (e) => {
      const rightParent = e.target.parentElement;
      if (rightParent.dataset.button === 'trending right') {
        trendingContainer.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'action right') {
        e.preventDefault();
        actionMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'comedy right') {
        e.preventDefault();
        comedyMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'horror right') {
        e.preventDefault();
        horrorMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'romance right') {
        e.preventDefault();
        romanceMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'thriller right') {
        e.preventDefault();
        thrillerMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'action tv right') {
        e.preventDefault();
        actionTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'comedy tv right') {
        e.preventDefault();
        comedyTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'documentary tv right') {
        e.preventDefault();
        documentaryTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'drama tv right') {
        e.preventDefault();
        dramaTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'family tv right') {
        e.preventDefault();
        familyTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'kids tv right') {
        e.preventDefault();
        kidsTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'reality tv right') {
        e.preventDefault();
        realityTv.scrollLeft += window.outerWidth;
      }
    })
  );
}
carousel();

//Generate Footer Content
function generateFooter() {
  let date = new Date().getFullYear();

  footer.innerHTML = `
      <p>Designed & Developed by Trevin Shu &copy; ${date}</p>
    `;
}

generateFooter();
