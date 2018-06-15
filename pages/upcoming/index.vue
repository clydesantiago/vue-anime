<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Upcoming</h1>
      </v-flex>
      <v-flex md3 xs12 v-for="(item, index) in items" :key="'item-' + index">
        <anime
        :title="item.title"
        :img="item.image_url"
        :url="item.url"
        :rank="item.rank"
        :type="item.type"
        :id="item.mal_id"
        ></anime>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Anime from '@/components/Anime.vue'
  
  export default {
    components: {
      Anime
    },
    asyncData (context) {
      return context.app.$axios.get('/top/anime/1/upcoming')
        .then(res => {
          return {
            items: res.data.top
          }
        })
    }
  }
</script>
