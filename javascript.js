class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


let movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
console.log(movie1.title);   
console.log(movie1.studio);  
console.log(movie1.rating);   