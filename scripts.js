document.addEventListener("DOMContentLoaded", function() {
  const videoPlayer = document.getElementById('video-player');
  const playPauseButton = document.getElementById('play-pause');
  const previousButton = document.getElementById('previous');
  const forwardButton = document.getElementById('forward');
  const movieGallery = document.querySelectorAll('.movie');

  // Event listener for movie click
  movieGallery.forEach(movie => {
    movie.addEventListener('click', function() {
      const videoSource = this.getAttribute('data-video');
      videoPlayer.src = videoSource;
      videoPlayer.play();
    });
  });

  // Event listeners for control buttons
  playPauseButton.addEventListener('click', function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });

  previousButton.addEventListener('click', function() {
    // Code to go to the previous video, if applicable
    // This could involve maintaining a list of video sources
    // and tracking the current video index
    console.log('Previous button clicked');
  });

  forwardButton.addEventListener('click', function() {
    // Code to go to the next video, if applicable
    // Similar to previousButton event listener
    console.log('Forward button clicked');
  });
});
