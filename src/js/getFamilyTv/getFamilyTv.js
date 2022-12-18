const familyTv = document.getElementById('familyTv');

//Get Family TV
async function getFamilyTv(apiKey) {
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

export default getFamilyTv;
