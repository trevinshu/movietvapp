const movieContainer = document.querySelectorAll('.movieContainer');
const tvContainer = document.querySelectorAll('.tvContainer');

//Remove Pre-Loaded Content For Search Results
function removePreLoadedContent() {
  movieContainer.forEach((movieContainers) => {
    movieContainers.remove();
  });

  tvContainer.forEach((tvContainers) => {
    tvContainers.remove();
  });
}

export default removePreLoadedContent;
