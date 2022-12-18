const thrillerMovies = document.getElementById('thrillerMovies');

//Get Thriller Movies
async function getThrillerMovies(apiKey) {
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

export default getThrillerMovies;
