//GigoPlanet Accessories Intro
let intro = "Welcome to GigoPlanet Movies";
let line = "--------------------------------------------------";
console.log(line);
console.log(intro.toLocaleUpperCase());
console.log(line);


// Store Class
class MovieStore {
    constructor() {
      this.movies = [];
      this.users = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
      console.log(`${movie.title} added to the movie store.`);
    }
  
    addUser(user) {
      this.users.push(user);
      console.log(`${user.name} added to the user list.`);
    }
}

// User Class
class User {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovie(movie) {
      if (movie.rentMovie()) {
        this.rentedMovies.push(movie);
        console.log(`${this.name} rented ${movie.title}.`);
      } else {
        console.log(`${this.name} could not rent ${movie.title}.`);
      }
    }
  
    returnMovie(movie) {
      const index = this.rentedMovies.indexOf(movie);
      if (index !== -1) {
        movie.returnMovie();
        this.rentedMovies.splice(index, 1);
        console.log(`${this.name} returned ${movie.title}.`);
      } else {
        console.log(`${this.name} did not rent ${movie.title}.`);
      }
    }
}
  
// Movie class
class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return true;
      } else {
        console.log("No available copies.");
        return false;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      console.log("Movie returned successfully.");
    }
}



  // Usage Class
const movie1 = new Movie("Living in Bondage1", "Drama", 7);
const movie2 = new Movie("Love Doctor", "Drama", 4);

const user1 = new User("Chioma");
const user2 = new User("Uchenna");

const movieStore = new MovieStore();

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

movieStore.addUser(user1);
movieStore.addUser(user2);

user1.rentMovie(movie1);
user1.rentMovie(movie2);

user2.rentMovie(movie1);

user1.returnMovie(movie1);
user2.returnMovie(movie1);

