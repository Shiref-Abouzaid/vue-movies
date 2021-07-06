<template>
    <div class="movie-details">
        <h2>{{movie.Title}}</h2>
        <p class="year">{{movie.Year}}</p>
        <img :src="movie.Poster" :alt="movie.Title" class="featured-image">
        <p>{{movie.Plot}}</p>


    </div>
</template>
<script>

import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js'
export default {
    setup() {
        const movie = ref({});
        const route = useRoute();
        onBeforeMount(()=>{
            
            fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(response=>response.json())
            .then(data=>{
                movie.value = data;
                
            })
        });

        return {movie,route}
    }
}
</script>
<style lang="scss">
    .movie-details {
        padding:1rem;
        h2 {
            color:#fff;
            font-size: 2rem;
            font-weight: 600;
            margin-bottom:1rem;
        }

        .featured-image{
            display: block;

            margin-bottom:1rem;
            width:100%;
  
        }
        p{
            color:#FFF;
            font-size: 1.2rem;
            line-height: 1.4;
        }
    }
</style>
