const comedyMovies = document.getElementById('comedyMovies');

//Get Comedy Movies
async function getComedyMovies(apiKey) {
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

export default getComedyMovies;
