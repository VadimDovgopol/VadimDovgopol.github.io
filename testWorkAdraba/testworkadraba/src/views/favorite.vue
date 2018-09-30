<template>
  <div class="home">

    <div class="movie-wrapper">
      <div class="movie-block" v-for="(key, value) in projects">
        <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${key.poster_path}`" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data: () => ({
      projects: [],
      someData: null,
      token: '3685d3eb8695f087227e0ee980f3ae4d',
    }),
    created () {
      // GET /someUrl
      this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.token + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {

        // get body data
        this.someData = response.body.results

        this.someData.map(item => {
          this.projects.push(item)
        })
        console.log(this.projects)
      }, response => {
        // error callback
      })
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
      width: 48%;
      margin: 10px;
      cursor: pointer;
    }
  }
</style>

