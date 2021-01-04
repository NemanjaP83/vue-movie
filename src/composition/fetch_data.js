import { ref } from 'vue'
import env from '../env.js'

const fetch_data = () => {
    const search = ref('avengers')
    const movies = ref([])

    const searchMovies = () => {
      if (search.value !== '') { 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.api_key}&language=en-US&query=${search.value}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => {
          movies.value = data.results
          search.value = ''
          console.log(data.results)
        })
      }
    }

    return {
      search,
      movies,
      searchMovies
    }
  }

  export default fetch_data