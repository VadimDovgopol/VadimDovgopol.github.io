<template>
  <div class="moviePage">
    <headerBlock/>
    <div class="movie-item">
      <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movieInfo.poster_path}`" alt="">
      <div class="description">
        <div class="movie-name">
          <p>
            <a :href="`${movieInfo.homepage}`">{{movieInfo.title}}</a>
          </p>
          <p class="line-text">(<span>{{movieInfo.release_date}}</span>)</p>
        </div>
        <div class="user-rating">
          <p class="head">User Rating</p>
          <p class="line-text total-point"><span>{{movieInfo.vote_average}}</span> out of 10</p>
        </div>
        <div class="budget-wrapper">
          <p class="budget head">budget </p>
          <p class="line-text">
            <span>{{movieInfo.budget}}</span>
            $
          </p>
        </div>
        <p class="head">OVERVIEW</p>
        <p>{{movieInfo.overview}}</p>
      </div>
      <div class="creators">
        <p class="head">Creators</p>
        <div class="creators-item">
          <p v-for="(key, value) in movieInfo.production_companies">
            {{key.name}}
          </p>
        </div>
      </div>
    </div>
    <p class="head similar-wrapper">similar</p>
    <div class="similar">
      <div class="similar-item" v-for="(key, value) in similar" @click="changeDesc(`${key.id}`)">
        <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${key.poster_path}`" alt="">
        <p>{{key.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src
  export default {
    name: 'moviePage',
    data: () => ({
      movieInfo: null,
      similar: null,
      token: '3685d3eb8695f087227e0ee980f3ae4d',
      selectMovieId: sessionStorage.getItem("movieId"),
    }),

    created() {
      this.loadData();
      this.loadSimilar()
      //get similar
    },
    methods: {
      loadSimilar() {
        this.$http.get('https://api.themoviedb.org/3/movie/' + this.selectMovieId + '/similar?api_key=' + this.token + '&language=en-US&page=1').then(response => {
          this.similar = response.body.results
        }, response => {
        })
      },
      loadData() {
        this.$http.get('https://api.themoviedb.org/3/movie/' + this.selectMovieId + '?api_key=' + this.token).then(response => {
          this.movieInfo = response.body
        }, response => {
        });
      },
      changeDesc(id) {
        sessionStorage.setItem('movieId', id);
        location.reload();
      }
    }
  }
</script>

<style lang="scss">
  .movie-item {
    margin-top: 105px;
    display: flex;
    flex-direction: column;
    img {
      width: 185px;
      height: 278px;
    }
  }

  .moviePage {
    img {
      margin: 10px;
    }
    .head {
      text-transform: uppercase;
      color: #d24a43;
    }
    .description {
      .line-text {
        margin: 10px 0;
      }
      .user-rating {
        display: flex;
        flex-direction: row;
      }
      .movie-name {
        display: flex;
        flex-direction: row;
        a {
          text-decoration: underline;
        }
      }
      .budget-wrapper {
        display: flex;
        flex-direction: row;
      }
    }
    .similar-wrapper {
      margin-top: 50px;
    }
    .similar {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      .similar-item {
        cursor: pointer;
      }
    }
  }
</style>

