const API_KEY = "404bf6fd7fe9397b0a4b1fc3d80c605b"

async function getMovieGenres() {
    try {
        const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b"
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b',
            {
                method: 'GET'
            });
        return await res.json()
    } catch (error) {
        console.log(error)
    }
};


const movieId = "tt0317705"
const base_endpoint = "https://api.themoviedb.org/3"

const getMovieById = async movieId => {
    const apiUrl = "https://api.themoviedb.org/3/find/tt0317705?external_source=imdb_id&api_key=404bf6fd7fe9397b0a4b1fc3d80c605b"
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};



async function getFavoriteMovie() {
    try {
        const apiUrl = "https://api.themoviedb.org/3/find/tt0317705?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b&language=en-US&external_source=imdb_id"
        const res = await fetch('https://api.themoviedb.org/3/find/tt0317705?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b&language=en-US&external_source=imdb_id',
            {
                method: 'GET'
            });
        return await res.json()
    } catch (error) {
        console.log(error)
    }
};



const getTopRatedMovies = async topRatedMovies => {
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b&language=en-US&page=1"
    const movieByIDEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


const getTopRatedActionMovies = async topRatedActionMovies => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=28"
    const movieByIDEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=28`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


const getMovies1975 = async Movies1975 => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=404bf6fd7fe9397b0a4b1fc3d80c605b&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=1975";
    const movieByIDEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=1975`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};