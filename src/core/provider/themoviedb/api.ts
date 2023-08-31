export default class ThemoviedbApi{
    constructor() {
    }
   getDefaultMovies(){
        return [
            {
                "adult": false,
                "backdrop_path": "/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
                "genre_ids": [
                    28,
                    878,
                    27
                ],
                "id": 615656,
                "original_language": "en",
                "original_title": "Meg 2: The Trench",
                "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
                "popularity": 6365.282,
                "poster_path": "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
                "release_date": "2023-08-02",
                "title": "Meg 2: The Trench",
                "video": false,
                "vote_average": 6.9,
                "vote_count": 941
            },
            {
                "adult": false,
                "backdrop_path": "/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
                "genre_ids": [
                    28,
                    878,
                    27
                ],
                "id": 615657,
                "original_language": "en",
                "original_title": "Meg 2: The Trench",
                "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
                "popularity": 6365.282,
                "poster_path": "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
                "release_date": "2023-08-02",
                "title": "Meg 2: The Trench",
                "video": false,
                "vote_average": 6.9,
                "vote_count": 941
            },

            // More products...
        ]
        /*
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VUE_APP_MOVIES_API_KEY,
          }
        };

        fetch(import.meta.env.VITE_APP_BASE_URL_MOVIE_API, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));*/
    }
}

