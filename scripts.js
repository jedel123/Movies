document.addEventListener("DOMContentLoaded", function() {
  const movieContainer = document.getElementById('movie-container');
  const audioPlayer = document.getElementById('audio-player');

  // Sample movies data
  const movies = [
    { title: 'Movie 1', category: 'Action', src: 'movie1.mp4', audio: 'audio1.mp3' },
    { title: 'Movie 2', category: 'Comedy', src: 'movie2.mp4', audio: 'audio2.mp3' },
    { title: 'Movie 3', category: 'Drama', src: 'movie3.mp4', audio: 'audio3.mp3' }
    // Add more movie objects as needed
  ];

  // Display movies in the specified category
  function displayMovies(category) {
    movieContainer.innerHTML = ''; // Clear previous movies

    movies.forEach(movie => {
      if (movie.category === category) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const video = document.createElement('video');
        video.src = movie.src;
        video.controls = true;
        video.preload = 'metadata';

        const audio = document.createElement('audio');
        audio.src = movie.audio;
        audio.controls = true;
        audio.preload = 'metadata';
        audio.style.display = 'none'; // Hide audio player

        const title = document.createElement('h3');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        movieCard.appendChild(video);
        movieCard.appendChild(audio);
        movieCard.appendChild(title);

        movieContainer.appendChild(movieCard);
      }
    });
  }

  // Initial display - show movies in 'Action' category
  displayMovies('Action');

  // Event listener for category links
  document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedCategory = this.textContent;
      displayMovies(selectedCategory);
    });
  });
});
