require('dotenv').config();
const apiKey = process.env.API_KEY;

//Get Trending Container
const trendingContainer = document.getElementById('trending');
const actionMovies = document.getElementById('actionMovies');
const comedyMovies = document.getElementById('comedyMovies');
const horrorMovies = document.getElementById('horrorMovies');
const romanceMovies = document.getElementById('romanceMovies');
const thrillerMovies = document.getElementById('thrillerMovies');

async function getTrendingMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="trendingItem" data-id="${item.id}" data-type="${item.media_type}">
            <a href="#" id="viewItem" class="viewItem">
              <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            </a>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    trendingContainer.innerHTML = html;
  });
}
getTrendingMovies();

trendingContainer.addEventListener('click', viewSelectedItem);
function viewSelectedItem(e) {
  const imgBtn = e.target.parentElement.parentElement;

  if (imgBtn.dataset.type === 'tv') {
    console.log(`tv selected ${imgBtn.dataset.id}`);
  } else {
    console.log(`movie selected ${imgBtn.dataset.id}`);
  }
  e.preventDefault();
}
//Get Action Movies
async function getActionMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=5dba95e581584ef61f28fcb8642f6a9a&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&without_genres=35%2C%2027%2C%2010749%2C%2053`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
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
  https://api.themoviedb.org/3/discover/movie?api_key=5dba95e581584ef61f28fcb8642f6a9a&language=en-US&sort_by=popularity.desc&page=1&with_genres=35&without_genres=28%2C%2027%2C%2010749%2C%2053`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    comedyMovies.innerHTML = html;
  });
}
getComedyMovies();

//Get Horror Movies
async function getHorrorMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=5dba95e581584ef61f28fcb8642f6a9a&language=en-US&sort_by=popularity.desc&page=1&with_genres=27&without_genres=28%2C%2035%2C%2010749%2C%2053`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    horrorMovies.innerHTML = html;
  });
}
getHorrorMovies();

//Get Romance Movies
async function getRomanceMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=5dba95e581584ef61f28fcb8642f6a9a&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749&without_genres=27%2C%20%2053%2C%2028`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    romanceMovies.innerHTML = html;
  });
}
getRomanceMovies();

//Get Thriller Movies
async function getThrillerMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=5dba95e581584ef61f28fcb8642f6a9a&language=en-US&sort_by=popularity.desc&page=1&with_genres=53&without_genres=27%2C%2028%2C%2035%2C%2010749`
  );
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="movieItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    thrillerMovies.innerHTML = html;
  });
}
getThrillerMovies();

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
      }
    })
  );

  // leftBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   actionMovies.scrollLeft -= window.outerWidth;
  // });

  // rightBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   actionMovies.scrollLeft += window.outerWidth;

  //   // if (Math.abs(trendingContainer.scrollLeft) === trendingContainer.scrollWidth - trendingContainer.clientWidth) {
  //   //   rightBtn.remove();
  //   // }
  // });
}
carousel();
