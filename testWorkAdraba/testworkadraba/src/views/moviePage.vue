<template>
  <div class="moviePage">
    <headerBlock/>

  </div>
</template>
<script>
  // @ is an alias to /src
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'moviePage',
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

      this.$http.get('https://api.themoviedb.org/3/movie/' + this.selectMovie + '?api_key=' + this.token).then(response => {

        // get body data
        this.someData = response.body

      }, response => {
        // error callback
      })
    },
    methods: {
      moreInfo (id) {
        this.$store.commit('setSelectMovie', id)
        console.log(this.selectMovie)
      },
      // ...mapMutations(['setSelectMovie'])
    }
  }
</script>

<style lang="scss">

</style>

