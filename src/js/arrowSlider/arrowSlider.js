const trendingContainer = document.getElementById('trending');
const actionMovies = document.getElementById('actionMovies');
const comedyMovies = document.getElementById('comedyMovies');
const horrorMovies = document.getElementById('horrorMovies');
const romanceMovies = document.getElementById('romanceMovies');
const thrillerMovies = document.getElementById('thrillerMovies');
const actionTv = document.getElementById('actionTv');
const comedyTv = document.getElementById('comedyTv');
const documentaryTv = document.getElementById('documentaryTv');
const dramaTv = document.getElementById('dramaTv');
const familyTv = document.getElementById('familyTv');
const kidsTv = document.getElementById('kidsTv');
const realityTv = document.getElementById('realityTv');

//Arrow Btn Slider Logic
function arrowSlider() {
  let leftBtn = document.querySelectorAll('#leftButton');
  let rightBtn = document.querySelectorAll('#rightButton');

  leftBtn.forEach((leftButton) =>
    leftButton.addEventListener('click', (e) => {
      const leftParent = e.target.parentElement;
      if (leftParent.dataset.button === 'trending left') {
        e.preventDefault();
        trendingContainer.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'action left') {
        e.preventDefault();
        actionMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'comedy left') {
        e.preventDefault();
        comedyMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'horror left') {
        e.preventDefault();
        horrorMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'romance left') {
        e.preventDefault();
        romanceMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'thriller left') {
        e.preventDefault();
        thrillerMovies.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'action tv left') {
        e.preventDefault();
        actionTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'comedy tv left') {
        e.preventDefault();
        comedyTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'documentary tv left') {
        e.preventDefault();
        documentaryTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'drama tv left') {
        e.preventDefault();
        dramaTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'family tv left') {
        e.preventDefault();
        familyTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'kids tv left') {
        e.preventDefault();
        kidsTv.scrollLeft -= window.outerWidth;
      } else if (leftParent.dataset.button === 'reality tv left') {
        e.preventDefault();
        realityTv.scrollLeft -= window.outerWidth;
      }
    })
  );

  rightBtn.forEach((rightButton) =>
    rightButton.addEventListener('click', (e) => {
      const rightParent = e.target.parentElement;
      if (rightParent.dataset.button === 'trending right') {
        trendingContainer.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'action right') {
        e.preventDefault();
        actionMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'comedy right') {
        e.preventDefault();
        comedyMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'horror right') {
        e.preventDefault();
        horrorMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'romance right') {
        e.preventDefault();
        romanceMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'thriller right') {
        e.preventDefault();
        thrillerMovies.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'action tv right') {
        e.preventDefault();
        actionTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'comedy tv right') {
        e.preventDefault();
        comedyTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'documentary tv right') {
        e.preventDefault();
        documentaryTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'drama tv right') {
        e.preventDefault();
        dramaTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'family tv right') {
        e.preventDefault();
        familyTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'kids tv right') {
        e.preventDefault();
        kidsTv.scrollLeft += window.outerWidth;
      } else if (rightParent.dataset.button === 'reality tv right') {
        e.preventDefault();
        realityTv.scrollLeft += window.outerWidth;
      }
    })
  );
}

export default arrowSlider;
