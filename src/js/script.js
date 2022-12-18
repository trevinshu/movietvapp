require('dotenv').config();
const apiKey = process.env.API_KEY;

//Import Modules
import './lightDarkModeToggler/themeSwitcher';
import './handleSearch/handleSearch';
import getTrendingMoviesAndTvShows from './getTrendingMoviesAndTvShows/getTrendingMoviesAndTvShows';
import getActionMovies from './getActionMovies/getActionMovies';
import getComedyMovies from './getComedyMovies/getComedyMovies';
import arrowSlider from './arrowSlider/arrowSlider';
import generateFooter from './footerContent/generateFooter';
import getRealityTv from './getRealityTv/getRealityTv';
import getKidsTv from './getKidsTv/getKidsTv';
import getFamilyTv from './getFamilyTv/getFamilyTv';
import getDramaTv from './getDramaTv/getDramaTv';
import getDocumentaryTv from './getDocumentaryTv/getDocumentaryTv';
import getComedyTv from './getComedyTv/getComedyTv';
import getActionTv from './getActionTv/getActionTv';
import getThrillerMovies from './getThrillerMovies/getThrillerMovies';
import getRomanceMovies from './getRomanceMovies/getRomanceMovies';
import getHorrorMovies from './getHorrorMovies.js/getHorrorMovies';
import { viewSelectedMovieTvItem } from './viewCloseModal/viewCloseModal';

//Get Containers/Items/Buttons
const trendingContainer = document.getElementById('trending');
const searchContainer = document.getElementById('searchContainer');
const msgContainer = document.getElementById('msgContainer');

//Event Listeners
trendingContainer.addEventListener('click', viewSelectedMovieTvItem);
searchContainer.addEventListener('click', viewSelectedMovieTvItem);
document.addEventListener('DOMContentLoaded', function () {
  searchContainer.remove();
  msgContainer.remove();
});

arrowSlider();
getTrendingMoviesAndTvShows(apiKey);
getActionMovies(apiKey);
getComedyMovies(apiKey);
getRealityTv(apiKey);
getKidsTv(apiKey);
getFamilyTv(apiKey);
getDramaTv(apiKey);
getDocumentaryTv(apiKey);
getComedyTv(apiKey);
getActionTv(apiKey);
getThrillerMovies(apiKey);
getRomanceMovies(apiKey);
getHorrorMovies(apiKey);
generateFooter();
