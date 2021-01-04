<template>
  <div class="home">
    <div class="card">
      <div class="details">
        <h3>MovieApp</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos
          natus, labore dignissimos perferendis quasi repellendus quis possimus
          enim quidem eum tempora ut quae veritatis repellat sunt rem sapiente,
          perspiciatis amet! Sed nam eius ea explicabo illum non, aliquid quod,
          tempora deserunt doloremque reprehenderit vero quam earum vitae
          mollitia totam!
        </p>
      </div>
    </div>
    
    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="{name: 'MovieDetail', params: {id: movie.id}}" class="movie-link">
          <div class="movie-poster" v-if="movie.poster_path">
            <img
              :src="
                'https://image.tmdb.org/t/p/w220_and_h330_face' +
                movie.poster_path
              "
              alt="poster"
            />
            <div class="movie-detail">
              <p>Year: {{ movie.release_date }}</p>
              <h3>{{ movie.title }}</h3>
            </div>
          </div>

          <div class="no-poster" v-else>
            <h4>No poster</h4>
            <p>Year: {{ movie.release_date }}</p>
            <h3>{{ movie.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// import { computed } from "vue";
import Footer from '../components/Footer.vue'

export default {
  props: ["movies"],
  components: {
    Footer
  },
    setup() {
    
    
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
.home {

  .card {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    height: 75vh;
    background-image: url("../assets/img/johnwick.jpg");
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }
  .details {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 150px;
    padding: 2% 10%;
    background-color: rgba(0, 0, 0, 0.6);

    h3 {
      color: #fff;
      padding: 0 0 8px;
    }

    p {
      color: #fff;
      font-size: 14px;
      line-height: 1.4;
      opacity: 0.7;
    }
  }

  .search-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      border-radius: 6px;
      outline: none;

      &[type="text"] {
        padding: 10px 16px;
        width: 40%;
        color: #fff;
        background-color: #496583;
        font-size: 18px;
        margin-right: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #c2b8b8;
        }

        &:focus {
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        max-width: 200px;
        background-color: #42b883;
        color: #fff;
        font-size: 18px;
        padding: 10px 16px;
        // text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3b8070;
        }
      }
    }
  }

  .movie-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2%;

    .movie {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
      background: rgb(7, 63, 95);
      width: 220px;
      height: 330px;
    }

    .movie-detail {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      min-height: 70px;
      background-color: rgba(7, 63, 95, 0.9);
      padding: 10px;
    }

    .movie-poster {
      p {
        color: rgba($color: #ffffff, $alpha: 0.85);
        font-size: 14px;
        margin-bottom: 8px;
      }

      h3 {
        color: rgba($color: #ffffff, $alpha: 0.85);
        font-size: 16px;
        font-weight: normal;
      }
    }

    .no-poster {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      min-height: 70px;
      padding: 10px;

      p {
        color: rgba($color: #ffffff, $alpha: 0.85);
        font-size: 14px;
        margin-bottom: 8px;
      }

      h3 {
        color: rgba($color: #ffffff, $alpha: 0.85);
        font-weight: normal;
      }

      h4 {
        color: rgba($color: #ffffff, $alpha: 0.9);
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
