require('dotenv').config();
const apiKey = process.env.API_KEY;

//Get Trending Container
const trendingContainer = document.getElementById('trending');

async function getTrendingMovies() {
  let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="trendingItem" >
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy" alt="movie poster"/>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
    trendingContainer.innerHTML = html;
  });
}
getTrendingMovies();

//Content Carousel
function carousel() {
  let leftBtn = document.getElementById('leftButton');
  let rightBtn = document.getElementById('rightButton');

  leftBtn.addEventListener('click', function (e) {
    e.preventDefault();
    trendingContainer.scrollLeft -= window.outerWidth;
  });

  rightBtn.addEventListener('click', function (e) {
    e.preventDefault();
    trendingContainer.scrollLeft += window.outerWidth;

    // if (Math.abs(trendingContainer.scrollLeft) === trendingContainer.scrollWidth - trendingContainer.clientWidth) {
    //   rightBtn.remove();
    // }
  });
}
carousel();
