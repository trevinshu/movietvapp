import getInfo from '../getMovieTvInfo/getInfo';
actionMovies.addEventListener('click', viewSelectedMovieItem);
comedyMovies.addEventListener('click', viewSelectedMovieItem);
horrorMovies.addEventListener('click', viewSelectedMovieItem);
romanceMovies.addEventListener('click', viewSelectedMovieItem);
thrillerMovies.addEventListener('click', viewSelectedMovieItem);
actionTv.addEventListener('click', viewSelectedTvItem);
comedyTv.addEventListener('click', viewSelectedTvItem);
documentaryTv.addEventListener('click', viewSelectedTvItem);
dramaTv.addEventListener('click', viewSelectedTvItem);
familyTv.addEventListener('click', viewSelectedTvItem);
kidsTv.addEventListener('click', viewSelectedTvItem);
realityTv.addEventListener('click', viewSelectedTvItem);

const modalInfo = document.getElementById('modalContent');
modalInfo.addEventListener('click', closeModal);

function viewSelectedMovieTvItem(e) {
  const imgBtn = e.target.parentElement.parentElement;
  const type = imgBtn.dataset.type;
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}
//Function to View Selected Movie/TV Show
function viewSelectedTvItem(e) {
  const imgBtn = e.target.parentElement;
  const type = 'tv';
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}

function viewSelectedMovieItem(e) {
  const imgBtn = e.target.parentElement;
  const type = 'movie';
  const id = imgBtn.dataset.id;

  getInfo(type, id);
  e.preventDefault();
}

//Close Modal
function closeModal(e) {
  if (e.target.parentElement.classList.contains('closeModal')) {
    modalContainer.classList.remove('showModal');
    document.body.style.overflow = 'scroll';
    footer.style.visibility = 'visible';
  }
  e.preventDefault();
}

export { viewSelectedMovieTvItem, viewSelectedMovieItem, viewSelectedTvItem, closeModal };
