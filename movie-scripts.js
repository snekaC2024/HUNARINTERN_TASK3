// Sample images for Movies and TV Shows in India and Global
const images = {
    india: {
        movies: [
            'images/india-movie1.jpg',
            'images/india-movie2.jpg',
            'images/india-movie3.jpg',
            'images/india-movie4.jpg',
            'images/india-movie5.jpg',
            'images/india-movie6.jpg',
            'images/india-movie7.jpg',
            'images/india-movie8.jpg',
            'images/india-movie9.jpg',
            'images/india-movie10.jpg'
        ],
        tvShows: [
            'images/india-tvshow1.jpg',
            'images/india-tvshow2.jpg',
            'images/india-tvshow3.jpg',
            'images/india-tvshow4.jpg',
            'images/india-tvshow5.jpg',
            'images/india-tvshow6.jpg',
            'images/india-tvshow7.jpg',
            'images/india-tvshow8.jpg',
            'images/india-tvshow9.jpg',
            'images/india-tvshow10.jpg'
        ]
    },
    global: {
        movies: [
            'images/global-movie1.jpg',
            'images/global-movie2.jpg',
            'images/global-movie3.jpg',
            'images/global-movie4.jpg',
            'images/global-movie5.jpg',
            'images/global-movie6.jpg',
            'images/global-movie7.jpg',
            'images/global-movie8.jpg',
            'images/global-movie9.jpg',
            'images/global-movie10.jpg'
        ],
        tvShows: [
            'images/global-tvshow1.jpg',
            'images/global-tvshow2.jpg',
            'images/global-tvshow3.jpg',
            'images/global-tvshow4.jpg',
            'images/global-tvshow5.jpg',
            'images/global-tvshow6.jpg',
            'images/global-tvshow7.jpg',
            'images/global-tvshow8.jpg',
            'images/global-tvshow9.jpg',
            'images/global-tvshow10.jpg'
        ]
    }
};

// Function to load images based on region and type
function loadImages(region, type) {
    const trendingGrid = document.getElementById('trending-grid');
    trendingGrid.innerHTML = ''; // Clear existing images

    images[region][type].forEach(imageSrc => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `<img src="${imageSrc}" alt="${type} Thumbnail">`;
        trendingGrid.appendChild(movieCard);
    });
}

// Initial load with default settings (India, Movies)
loadImages('india', 'movies');

// Event listener for region and type selection
document.getElementById('region-select').addEventListener('change', function() {
    const region = this.value;
    const type = document.getElementById('type-select').value;
    loadImages(region, type);
});

document.getElementById('type-select').addEventListener('change', function() {
    const type = this.value;
    const region = document.getElementById('region-select').value;
    loadImages(region, type);
});