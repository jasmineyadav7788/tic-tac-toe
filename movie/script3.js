const API_KEY = 'your_omdb_api_key';  

async function searchMovies() {
    const query = document.getElementById('search-bar').value;
    if (query.toLowerCase().includes('spider-man')) {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.Search);
    } else {
        alert("Please type 'Spider-Man' to search for Spider-Man movies.");
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
            `;
            moviesContainer.appendChild(movieElement);
        });
    } else {
        moviesContainer.innerHTML = '<p>No movies found</p>';
    }
}
