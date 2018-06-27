<template>
  <v-container grid-list-xl>
    <v-layout 
      row 
      wrap>
      <v-flex xs12>
        <h1>Popular</h1>
      </v-flex>
      <v-flex 
        v-for="(item, index) in items" 
        :key="'item-' + index" 
        md3 
        xs12>
        <anime
          :title="item.title"
          :img="item.image_url"
          :url="item.url"
          :rank="item.rank"
          :type="item.type"
          :score="item.score"
          :id="item.mal_id"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Anime from "@/components/Anime.vue";

export default {
  components: {
    Anime
  },
  asyncData(context) {
    return context.app.$axios.get("/top/anime/1/bypopularity").then(res => {
      return {
        items: res.data.top
      };
    });
  }
};
</script>
