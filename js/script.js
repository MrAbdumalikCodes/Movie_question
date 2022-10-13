let numberOfFilms = +prompt('How many movies have you seen?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
    let question1 = prompt('One of the last movies you saw?', ''),
          question2 = prompt('How much would you rate it?', '');

    if (question1 == null && question2 == null && question1 == '' && question2 == '') {
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }
}
console.log(personalMovieDB);