class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of movies
const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG"),
    new Movie("Movie 4", "Studio 4", "PG-13"),
    new Movie("Movie 5", "Studio 5", "G")
];

// Getting PG-rated movies from the array
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
