const modalContainer = document.getElementById('modalContainer');
let footer = document.getElementById('footer');
const modalInfo = document.getElementById('modalContent');
//Function to display tv show info in modal
function showTvModal(info, rating, cast) {
  modalContainer.classList.add('showModal');
  document.body.style.overflow = 'hidden';
  footer.style.visibility = 'hidden';

  try {
    const tvRating = rating.results;
    const findUSRating = tvRating?.find((item) => item.iso_3166_1 === 'US');
    const runtime =
      info.episode_run_time.length > 0
        ? Math.floor(info.episode_run_time[0] / 60) + ' Hours' + ' & ' + (info.episode_run_time[0] % 60) + ' Minutes '
        : `No episode runtime info available for this show`;
    let html = `
    <div class="modalHeader">
      <h2>${info.name ? info.name : info.title}</h2>
      <button id="closeModal" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="showTags">
      <p><span>Seasons:</span> ${info.number_of_seasons > 0 ? info.number_of_seasons : `No Season Info Available for this show`}</p>
      <p><span>Rating:</span> ${info.vote_average > 0 ? `${Math.round(info.vote_average * 10)}%` : 'No Rating Available for this show'}</p>
      <p><span>Runtime:</span> ${runtime ? runtime : `No episode runtime info available for this show`}</p>
      <p><span>Genre:</span>${info.genres[0] ? info.genres.map((tag) => ` ${tag.name}`) : ` No Genre Info Available For This Show`}</p>
      <p><span>Content Rating: </span>${findUSRating ? findUSRating?.rating : `No Content Rating Available For This Show`}</p>
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
          <p>${info.overview ? info.overview : `No Overview Available For This Show`}</p>
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
          <h3>Created By:</h3>
          <p>${info.created_by[0] ? info.created_by.map((tag) => `${tag.name}`).join(' & ') : `No Creator Info Available For This Show`}</p>
        </div>
      </div>
    </div>
  `;
    modalInfo.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

export default showTvModal;
