require('dotenv').config();
const apiKey = process.env.API_KEY;

//Selectors

async function getTrendingMovies() {
  const trendingContainer = document.getElementById('trending');
  let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  let data = await response.json();
  let results = data.results.slice(0, 10);
  let html = '';
  results.forEach((item) => {
    html += `
        <div class="trendingItem">
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}' loading="lazy"/>
            <h2>${item.title ? item.title : item.name}</h2>
        </div>
     `;
    trendingContainer.innerHTML = html;
  });

  console.log(trendingContainer);
}

getTrendingMovies();
