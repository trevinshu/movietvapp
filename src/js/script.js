require('dotenv').config();
const apiKey = process.env.API_KEY;

//Get Containers/Items
const trendingContainer = document.getElementById('trending');
const searchContainer = document.getElementById('searchContainer');
const movieContainer = document.querySelectorAll('.movieContainer');
const container = document.getElementById('container');
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

toggleColorScheme.addEventListener('click', (e) => {
  if (document.body.classList.toggle('dark')) {
    button.classList.remove('fa-moon');
    button.classList.add('fa-sun');
  } else {
    button.classList.add('fa-moon');
    button.classList.remove('fa-sun');
  }
  e.preventDefault();
});

//Handle Search Click
searchBtn.addEventListener('click', (e) => {
  const input = searchInput.value;
  getMoviesAndShowsBySearch(input);
  e.preventDefault();
});

//Draw Content For Search Input
async function getMoviesAndShowsBySearch(searchInput) {
  let response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';

  let searchHeading = document.createElement('h2');
  searchHeading.innerHTML = `Search Results For <span>${searchInput}</span>:`;
  searchHeading.className = 'searchHeading';
  container.insertBefore(searchHeading, searchContainer);

  results.forEach((item) => {
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
  });

  searchContainer.innerHTML = html;
  removePreLoadedContent();
}

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

// trendingContainer.addEventListener('click', viewSelectedItem);
// function viewSelectedItem(e) {
//   const imgBtn = e.target.parentElement.parentElement;

//   if (imgBtn.dataset.type === 'tv') {
//     console.log(`tv selected ${imgBtn.dataset.id}`);
//   } else {
//     console.log(`movie selected ${imgBtn.dataset.id}`);
//   }
//   e.preventDefault();
// }

//Get Action Movies
async function getActionMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&without_genres=35%2C%2027%2C%2010749%2C%2053`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
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
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This Movie</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    comedyMovies.innerHTML = html;
  });
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
        <div class="movieItem" >
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
        <div class="movieItem" >
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
        <div class="movieItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
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
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4>No Poster Available For This TV Show</h4>'}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    realityTv.innerHTML = html;
  });
}
getRealityTv();

//Content Carousel
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

function generateFooter() {
  let footer = document.getElementById('footer');
  let date = new Date().getFullYear();

  footer.innerHTML = `
      <p>Designed & Developed by Trevin Shu &copy; ${date}</p>
    `;
}

generateFooter();
