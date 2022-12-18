const horrorMovies = document.getElementById('horrorMovies');

//Get Horror Movies
async function getHorrorMovies(apiKey) {
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

export default getHorrorMovies;
