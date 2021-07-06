<template>
  <div class="home">
 
    <div class="feature-card">
      <router-link to="/movie/tt3398228">
        <img src="https://images-na.ssl-images-amazon.com/images/I/41lptS8kIjL._AC_.jpg" alt="bojack horseman poster" class="featured-img"/>
        <div class="detail">
          <h3>Bojack Horseman</h3>
          <p>Anime Poster BoJack Horseman BoJack Poster Decorative Painting Canvas Wall Art Living Room Posters Bedroom Painting</p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="searchMovies"  class="search-box">
      <input type="text" v-model="search" placeholder="What are you looking for?">
      <input type="submit" value="Search"/>
    </form>


    <div class="movies-list" >
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link clas="movie-link" :to="`/movie/${movie.imdbID}`">
          <div class="product-image">
            <img :src="movie.Poster" :alt="movie.Title"/>
            <!-- <div class="type">{{movie.Type}}</div> -->
          </div>
          <div class="detail">
            <p class="year">{{movie.Year}} - {{movie.Type}}</p>
            <h3>{{movie.Title}}</h3>
          </div>

        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import env from '@/env.js'
export default {
  name: 'Home',
  setup() {
    const search = ref('');
    const movies = ref([]);

    const searchMovies = () =>{
      if(search.value != '') {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${env.apikey}&s=${search.value}`)
        .then(response => response.json())
        .then(data => {
          movies.value = data.Search;
          search.value = '';

        })
      }
    }

    return {
      search,
      movies,
      searchMovies
    }
  }
}
</script>
<style lang="scss">
$mainColor:#42B883;
  .home {
    .feature-card {
      position: relative;
      .featured-img {
        display: block;
        width:100%;
        height:18rem;
        object-fit: cover;
        position:relative;
        z-index: 0;
      }
      .detail {
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        right:0;
        background-color: rgba(0,0,0,0.6);
        padding: 1rem;
        z-index: 1;
        h3 {
          color:#fff;
          margin-bottom: 1rem;
        }
        p {
          color:#fff
        }
      }
    }

    .search-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:1rem;

      input {
        display: block;
        appearance: none;
        width:100%;
        border:none;
        outline: none;
        background: none;
        &[type="text"]{
          color:#fff;
          background-color: #496583;
          font-size: 1.2rem;
          padding:.7rem 1rem;
          border-radius: .5rem;
          margin-bottom:1rem;
          transition: 0.4s;
          &::placeholder {
            color:#f3f3f3
          }
          &:focus {
            box-shadow: 0 3px  6px rgba(0,0,0,0.2);
          }
        }

        &[type='submit'] {
          background-color: $mainColor;
          padding:1rem;
          border-radius: .5rem;
          color:#fff;
          font-size: 1.2rem;
          text-transform: uppercase;
          max-width: 17rem;
          transition: 0.4s;
         
          &:active{
             background-color:#3b8070
          }
        }
      }
    }

    .movies-list {
      display: flex;
      flex-wrap: wrap;
      margin:0 .6rem;

      .movie {
        max-width:50%;
        flex:1 1 50%;
        padding:.6rem 0.5rem;

        .movie-link {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .product-image {
          position:relative;
          display: block;
          img {
            width:100%;
            height:15rem;
                      object-fit: cover;
          }
          .type {
            text-align: center;
            padding: .3rem .5rem;
            background-color:$mainColor;
            color:#FFF;
            font-size: .8rem;
            text-transform: capitalize;
    
          }
        }
        .detail {
          background-color: #496583;
          padding:.5rem .6rem;
          height: 5.5rem;
          flex:1 1 100%;
          border-radius: 0 0 .6rem .6rem;
          .year {
            color:#aaa;
            font-size: .8rem;
          }
          h3 {
            color:#fff;
            font-weight: 600;
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
