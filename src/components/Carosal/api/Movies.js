const api = "https://api.themoviedb.org/3"
const apiKey = 'df1a8a2aad5fbba70d7851155c59e9f7';
const defaultOptions = 'language=en';

export const getByGenrer = (genrer) =>
  fetch(`${api}/genre/movie/list?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(res => res.genres) /* Return a list with all genres */
    .then(genresArray => {
      /* get the id of specific genrer */
      let id = genresArray.filter(g => g.name === genrer).map(g => g.id).join(',');
      return fetch(`${api}/discover/movie?api_key=${apiKey}&${defaultOptions}&sort_by=popularity.desc&with_genres=${id}`)
        .then(res => res.json())
        .then(data => data.results) /* return a list of movies based on genrer */
    })
