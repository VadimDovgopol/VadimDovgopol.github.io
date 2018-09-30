<template>
  <div class="home">
    <headerBlock/>
    <div class="movie-wrapper">
      <div class="movie-block" v-for="(key, value) in someData">
        <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${key.poster_path}`" alt="">
        <div class="description">
          <p v-html="key.overview"></p>
          <p class="see-more"><a @click="moreInfo(key.id)">more</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'home',
    data: () => ({
      someData: null,
      token: '3685d3eb8695f087227e0ee980f3ae4d',
    }),
    computed: {
      ...mapState(['selectMovie'])
      // Now you can read the name by using this.name
    },
    created () {
      // GET /someUrl
      this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.token + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {

        // get body data
        this.someData = response.body.results

      }, response => {
        // error callback
      })
    },
    methods: {
      moreInfo (id) {
        this.$store.commit('setSelectMovie', id)
        window.location.href = '#/moviePage'
      },
    }
  }
</script>

<style lang="scss">
  .movie-wrapper {
    margin-top: 105px;
    justify-content: flex-start;
    display: flex;
    flex-flow: row wrap;
    .movie-block {
      display: flex;
      width: 48%;
      margin: 10px;
      img {
        width: 185px;
        height: auto;
      }
      @media screen and (max-width: 1000px) {
        width: 100% !important;
        justify-content: center;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
      .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .see-more {
          display: flex;
          align-self: flex-end;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
  }
</style>

