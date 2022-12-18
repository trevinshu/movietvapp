import showTvModal from '../showTvShowModal/showTvShowModal';
import showMovieModal from '../showMovieModal/showMovieModal';
const apiKey = process.env.API_KEY;

//API Call to Get Movie/Show Info
async function getInfo(type, id) {
  if (type === 'tv') {
    let response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
    let data = await response.json();

    let responseTwo = await fetch(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${apiKey}`);
    let rating = await responseTwo.json();

    let responseThree = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`);
    let cast = await responseThree.json();

    showTvModal(data, rating, cast);
  } else {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    let data = await response.json();

    let responseTwo = await fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`);
    let rating = await responseTwo.json();

    let responseThree = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
    let cast = await responseThree.json();

    showMovieModal(data, rating, cast);
  }
}

export default getInfo;
