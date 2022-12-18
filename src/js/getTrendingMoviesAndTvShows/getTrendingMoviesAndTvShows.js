const trendingContainer = document.getElementById('trending');

//Get Trending Movies
async function getTrendingMoviesAndTvShows(apiKey) {
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

export default getTrendingMoviesAndTvShows;
