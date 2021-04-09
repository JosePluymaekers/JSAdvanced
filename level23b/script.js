//const setMovieGenres = async () => {
//    const data = await getMovieGenres();
//};



/* const setMovieGenres = async () => {
    const movieGenresList = document.getElementById("movieGenresList");
    const data = await getMovieGenres();
    data.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
        );
        li.appendChild(liContent);
        movieGenresList.appendChild(li);
    });
};

 */

console.log(getMovieGenres())

const setMovieGenres = async () => {
    const movieGenresList = document.getElementById("movieGenresList");
    const data = await getMovieGenres();
    data.genres.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
        );
        li.appendChild(liContent);
        movieGenresList.append(li);
    });
};

setMovieGenres()


console.log(getFavoriteMovie())


const setSingleMovie = async () => {
    const data = await getMovieById("tt0317705");
    const movie = data.movie_results[0];
    const topMovieH2 = document.getElementById("myFavoriteMovie").innerHTML = (movie.title);
};

setSingleMovie()




console.log(getTopRatedMovies())

const setTopRatedMovies = async () => {
    const topRatedMoviesList = document.getElementById("topRatedMoviesList");
    const data = await getTopRatedMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}`
        );
        li.appendChild(liContent);
        topRatedMoviesList.append(li);
    });
};

console.log(setTopRatedMovies())


console.log(getTopRatedActionMovies())

const setTopRatedActionMovies = async () => {
    const topRatedMoviesList = document.getElementById("topRatedActionMoviesList");
    const data = await getTopRatedActionMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}`
        );
        li.appendChild(liContent);
        topRatedActionMoviesList.append(li);
    });
};

console.log(setTopRatedActionMovies())



console.log(getMovies1975())

const setMovies1975 = async () => {
    const movies1975List = document.getElementById("movies1975");
    const data = await getMovies1975();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, release datum: ${movie.release_date}`
        );
        li.appendChild(liContent);
        movies1975List.append(li);
    });
};

console.log(setMovies1975())