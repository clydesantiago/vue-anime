<template>
  <v-card :to="'/anime/' + id" nuxt hover height="100%" :style="color ? 'background-color:rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)' : ''">
    <v-card-media
    height="300px"
    :src="img"
    >
    </v-card-media>
    <v-card-title>
      <span class="title">{{ title }}</span>
      <v-spacer></v-spacer>
      <!-- <v-badge overlap color="primary" v-if="rank">
        <span slot="badge">8</span>
        <v-icon
          large
          color="grey darken-1"
        >
          star
        </v-icon>
      </v-badge> -->
    </v-card-title>
    <v-card-text>
      <span v-if="description">{{ description }}</span>
      <div v-if="rank">
        <strong>Rank: </strong>
        <span>{{ rank }}</span>
      </div>
      <div v-if="episodes">
        <strong>Episodes: </strong>
        <span>{{ episodes }}</span>
      </div>
      <div v-if="type">
        <strong>Type: </strong>
        <span>{{ type }}</span>
      </div>
      <div v-if="genre">
        <strong>Genre: </strong>
        <span>Comedy, Drama</span>
      </div>
      <div v-if="score">
        <strong>Score: </strong>
        <span>{{ score }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import * as Vibrant from 'node-vibrant'

  export default {
    props: ['title', 'img', 'url', 'rank', 'episodes', 'type', 'genre', 'score', 'id', 'description'],
    data() {
      return {
        color: null
      }
    },
    mounted() {
      this.test()
    },
    methods: {
      test () {
        Vibrant.from(this.img).getPalette()
          .then((palette) => {
            if(palette.Vibrant){
              this.color = palette.Vibrant._rgb
            } else {
              this.color = palette.Muted._rgb
            }
          })
      }
    }
  }
</script>

