const modalContainer = document.getElementById('modalContainer');
let footer = document.getElementById('footer');
const modalInfo = document.getElementById('modalContent');

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

    const options = { dateStyle: 'medium' };
    const stringDate = info.release_date;
    const convertDate = new Date(stringDate);
    const releaseDate = convertDate.toLocaleDateString('en-US', options);

    let html = `
    <div class="modalHeader">
      <h2>${info.name ? info.name : info.title}</h2>
      <button id="closeModal" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="showTags">
      <p><span>Release Date:</span> ${releaseDate ? releaseDate : `No release date available for this movie`}</p>
      <p><span>Rating:</span> ${info.vote_average > 0 ? `${Math.round(info.vote_average * 10)}%` : `No rating available for this movie`}</p>
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

export default showMovieModal;
