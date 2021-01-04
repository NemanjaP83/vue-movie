<template>
  <header>
    <router-link to="/"><h1><span>Vue</span>Movies</h1></router-link>
    <form @submit.prevent='searchMovies()' class="search-box">
      <input type="text" placeholder="Search for movie..." v-model="search">
    </form>
  </header>
  <main>
    <router-view :movies ='movies' />
  </main>
</template>

<script>
import fetch_data from './composition/fetch_data.js'

export default {

  setup() {
    const {search, movies, searchMovies} = fetch_data()
    searchMovies()

    return {
      search,
      movies,
      searchMovies
    }
  }
}

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;

    &::selection {
      background: transparentize($color:#42b883, $amount: 0.5);
    }
  }

  body {
    background-color: #354959;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .4);

    h1 {
      color: #fff;
      font-size: 28px;

      span {
        color: #40e0d0;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .search-box {
    min-width: 30%;

    input {
      display: block;
      appearance: none;
      border: none;
      border-radius: 6px;
      outline: none;

      &[type='text'] {
        width: 100%;
        padding: 10px 16px;
        color: #fff;
        background-color: #496583;
        font-size: 14px;
        transition: .4s;

          &::placeholder {
            color: #c2b8b8;
          }

          &:focus {
            box-shadow: 0px 6px 10px rgba(0, 0, 0, .2);
          }
      }
    }
  }
</style>
