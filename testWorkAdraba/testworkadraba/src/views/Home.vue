<template>
  <div class="home">
    <headerBlock/>
    <div class="movie-wrapper">
      <div class="movie-block" v-for="(key, value) in someData">
        <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${key.poster_path}`" alt="">
        <div class="description">
          <p v-html="key.title"></p>
          <p v-html="key.overview"></p>
          <div class="buttons-wrapper">
            <div class="favorite-item" @click="addToFavorite(key.id)">
              <p class="add-to-favorite">favorite</p>
              <span class="favorite-icon"></span>
            </div>
            <p class="see-more"><a @click="moreInfo(key.id)">more</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data: () => ({
      someData: [],
      favorite: [],
      page: 1,
      token: '3685d3eb8695f087227e0ee980f3ae4d',
    }),

    created() {
      this.moreMovie()
    },
    mounted() {
      this.scroll();
    },
    methods: {
      addToFavorite(id) {
        let arrayFavorite = this.someData.find(x => x.id === id);
        this.$store.commit('favorite', arrayFavorite)
      },
      scroll() {
        window.onscroll = () => {
          let bottomOfWindow = Math.floor(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            this.moreMovie()
          }
        };
      },
      moreMovie() {
        // GET /someUrl
        this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.token + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + this.page).then(response => {
          // get body data
          response.body.results.map(item => {
            this.someData.push(item)
          });
          this.page++;
        }, response => {
          // error callback
        })
      },

      moreInfo(id) {
        sessionStorage.setItem('movieId', id);
        window.location.href = '#/moviePage'
      },
    }
  }
</script>

<style lang="scss">
  .home {
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
          .buttons-wrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            text-transform: uppercase;
          }
          .favorite-item {
            cursor: pointer;
            display: flex;
            align-items: baseline;
            .favorite-icon {
              display: flex;
              align-self: center;
              background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEyNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTYxLjA1MSwzNy4xOTZMNTAsMTQuODA3bC0xMS4wNSwyMi4zOWMtMC4zNDUsMC42OTktMS4wMTIsMS4xODMtMS43ODMsMS4yOTZsLTI0LjcwOSwzLjU5TDMwLjMzOCw1OS41MSAgIGMwLjU1OCwwLjU0NCwwLjgxMywxLjMyOCwwLjY4MSwyLjA5NmwtNC4yMiwyNC42MWwyMi4xLTExLjYxOWMwLjY5LTAuMzYzLDEuNTE0LTAuMzYzLDIuMjA1LDBsMjIuMSwxMS42MTlsLTQuMjIxLTI0LjYwOSAgIGMtMC4xMzItMC43NjgsMC4xMjMtMS41NTIsMC42ODEtMi4wOTZsMTcuODc5LTE3LjQyOGwtMjQuNzA4LTMuNTlDNjIuMDYyLDM4LjM4LDYxLjM5NSwzNy44OTUsNjEuMDUxLDM3LjE5NnoiLz48cGF0aCBkPSJNOTQuODg0LDM5LjY5N2MtMC4yNzgtMC44NTgtMS4wMi0xLjQ4My0xLjkxMi0xLjYxMmwtMjguMjI1LTQuMTAxTDUyLjEyNCw4LjQwN2MtMC4zOTktMC44MDktMS4yMjItMS4zMi0yLjEyNC0xLjMyICAgcy0xLjcyNSwwLjUxMi0yLjEyNCwxLjMyTDM1LjI1NCwzMy45ODNMNy4wMjgsMzguMDg1Yy0wLjg5MiwwLjEzLTEuNjMzLDAuNzU0LTEuOTEyLDEuNjEyYy0wLjI3OSwwLjg1Ny0wLjA0NiwxLjc5OSwwLjU5OSwyLjQyOCAgIEwyNi4xNCw2Mi4wMzNsLTQuODIxLDI4LjExMmMtMC4xNTMsMC44ODgsMC4yMTMsMS43ODYsMC45NDIsMi4zMTZjMC40MTMsMC4zLDAuOTAxLDAuNDUyLDEuMzkyLDAuNDUyICAgYzAuMzc3LDAsMC43NTUtMC4wOSwxLjEwMi0wLjI3Mkw1MCw3OS4zNjlsMjUuMjQ1LDEzLjI3M2MwLjc5OSwwLjQyLDEuNzY1LDAuMzQ5LDIuNDk0LTAuMThjMC43MjktMC41MywxLjA5NS0xLjQyOCwwLjk0Mi0yLjMxNyAgIEw3My44Niw2Mi4wMzNsMjAuNDI0LTE5LjkwOUM5NC45Myw0MS40OTUsOTUuMTYzLDQwLjU1NCw5NC44ODQsMzkuNjk3eiBNNjkuNjYzLDU5LjUxYy0wLjU1OCwwLjU0NC0wLjgxMywxLjMyOC0wLjY4MSwyLjA5NiAgIGw0LjIyMSwyNC42MDlsLTIyLjEtMTEuNjE5Yy0wLjY5LTAuMzYzLTEuNTE0LTAuMzYzLTIuMjA1LDBsLTIyLjEsMTEuNjE5bDQuMjItMjQuNjFjMC4xMzItMC43NjgtMC4xMjMtMS41NTItMC42ODEtMi4wOTYgICBMMTIuNDU4LDQyLjA4MmwyNC43MDktMy41OWMwLjc3Mi0wLjExMiwxLjQzOS0wLjU5NywxLjc4My0xLjI5Nkw1MCwxNC44MDdsMTEuMDUsMjIuMzljMC4zNDUsMC42OTksMS4wMTIsMS4xODMsMS43ODMsMS4yOTYgICBsMjQuNzA4LDMuNTlMNjkuNjYzLDU5LjUxeiIvPjwvZz48L3N2Zz4=') no-repeat center;
              width: 20px;
              height: 20px;
              &.active {
                background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMjQgMTI4MCIgeD0iMHB4IiB5PSIwcHgiPg0KICAgIDx0aXRsZT5pY29uLTAxPC90aXRsZT4NCiAgICA8cGF0aCBmaWxsPSIjZTdmZjAwIg0KICAgICAgICAgIGQ9Ik05MzEuNzcwMTgyIDM2OS43ODAzNjRsLTIyOS4zMjk0NTUtMzMuMzI2NTQ2YTUzLjI0OCA1My4yNDggMCAwIDEtNDAuMDk4OTA5LTI5LjE2MDcyN2wtMTAyLjUzOTYzNi0yMDcuNzc4OTA5Yy0xOS41NDkwOTEtMzkuNTg2OTA5LTc2LjA1NTI3My0zOS41ODY5MDktOTUuNjA0MzY0IDBsLTEwMi41Mzk2MzYgMjA3Ljc3ODkwOWE1My4yOTQ1NDUgNTMuMjk0NTQ1IDAgMCAxLTQwLjEyMjE4MiAyOS4xNjA3MjdsLTIyOS4zMDYxODIgMzMuMzI2NTQ2Yy00My43MDYxODIgNi4zNTM0NTUtNjEuMTYwNzI3IDYwLjA0MzYzNi0yOS41MzMwOTEgOTAuOTAzMjcybDE2NS45MzQ1NDYgMTYxLjcyMjE4MmMxMi41NDQgMTIuMjQxNDU1IDE4LjI2OTA5MSAyOS45MDU0NTUgMTUuMzEzNDU0IDQ3LjE3MzgxOGwtMzkuMTY4IDIyOC4zNzUyNzNjLTcuNDcwNTQ1IDQzLjUyIDM4LjIxMzgxOCA3Ni43NTM0NTUgNzcuMzEyIDU2LjE4MDM2NGwyMDUuMTAyNTQ2LTEwNy44MjI1NDZhNTMuMjQ4IDUzLjI0OCAwIDAgMSA0OS41OTQxODIgMGwyMDUuMTI1ODE4IDEwNy44MjI1NDZjMzkuMDc0OTA5IDIwLjU3MzA5MSA4NC43NTkyNzMtMTIuNjM3MDkxIDc3LjMxMi01Ni4xODAzNjRsLTM5LjE5MTI3My0yMjguMzc1MjczYTUzLjQ1NzQ1NSA1My40NTc0NTUgMCAwIDEgMTUuMzM2NzI3LTQ3LjE3MzgxOGwxNjUuOTM0NTQ2LTE2MS43NDU0NTRjMzEuNjI3NjM2LTMwLjgxMzA5MSAxNC4xNzMwOTEtODQuNTI2NTQ1LTI5LjUzMzA5MS05MC44OCIvPg0KPC9zdmc+') no-repeat center;
              }
            }
          }
          .see-more {
            display: flex;
            align-self: flex-end;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>

