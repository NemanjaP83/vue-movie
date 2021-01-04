<template>
  <div class="movie-detail">
      <div class="poster">
        <img :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path" alt="movie poster">
      </div>
      <div class="col">
        <h2>{{ movie.title}}</h2>
        <h4>- {{ movie.tagline }} -</h4>
      <div class="movie">
        <p>{{ movie.overview}}</p>
        <h4>rating: {{ movie.vote_average }}</h4>
        <h4>duration: {{ movie.runtime }} min.</h4>
        <h3>Release year: {{ movie.release_date }}</h3>
      </div>
      </div>
  </div>
</template>

<script>
import { ref, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'

export default {
  setup() {

    const movie = ref({})
    const route = useRoute()
    
    onBeforeMount(() => {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.api_key}&language=en-US`)
      .then(res => res.json())
      .then(data => {
        movie.value = data
        console.log(data)
        })
      .catch(err => console.log(err))
    })


    return {
     movie
    }
  }
}
</script>

<style lang="scss" scoped>

.movie-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2% 7%;
  background: rgb(11, 36, 49);
  margin-top: 4%;

  .col {
    display: flex;
    flex-direction: column;

    h2 {
      color: #fff;
      margin-bottom: 8px;
    }

    h4 {
      color: #40e0d0;
      margin-bottom: 8px;
    }
  }

  .poster {
    display: inline-block;
    width: 200px;
    margin-right: 20px;
  }

  .movie {
    display: flex;
    flex-direction: column;
    width: 55%;

    p {
      color: rgba(255, 255, 255, .7);
      margin-bottom: 8px;
    }

    h3 {
      color: #fff;
      margin-top: 10px;
      font-weight: normal;
      font-size: 18px;
    }
  }
}

</style>>

