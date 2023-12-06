// Build a Library
// Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// Movie
// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// CD
// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// If you’re looking for a challenge, try to create the four classes without using the steps below.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.


class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  } 
  get isCheckedOut() {
    return this._isCheckedOut;
  } 
  get ratings() {
    return this._ratings;
  } 
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
   this.isCheckedOut = !this.isCheckedOut;
  }

  // creating a method that returns the average value of the ratings array.
  getAverageRating() {
		// suggested by CGPT
    // if (this.ratings.length === 0) {
    //   return 'No ratings yet.';
    // }
   let ratingAverage = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
   return ratingAverage / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  } 
  get pages() {
    return this._pages;
  } 
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  } 
  get runTime() {
    return this._runTime;
  } 
}

// creating instances and calling them
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // Output: true

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // Output: 4.666666666666667

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // Output: true

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // Output: 2.3333333333333335