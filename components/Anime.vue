<template>
  <v-card 
    :to="'/anime/' + id" 
    :style="color ? 'background-color:rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)' : ''" 
    nuxt 
    hover 
    height="100%">
    <v-card-media
      :src="img"
      height="300px"
    />
    <v-card-title>
      <span class="title">{{ title }}</span>
      <v-spacer/>
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
import * as Vibrant from "node-vibrant";

export default {
  // props: [
  //   "title",
  //   "img",
  //   "url",
  //   "rank",
  //   "episodes",
  //   "type",
  //   "genre",
  //   "score",
  //   "id",
  //   "description"
  // ],
  props: {
    title: {
      default: "",
      type: String
    },
    img: {
      default: "",
      type: String
    },
    rank: {
      default: "",
      type: String
    },
    episodes: {
      default: "",
      type: String
    },
    type: {
      default: "",
      type: String
    },
    genre: {
      default: "",
      type: String
    },
    score: {
      default: "",
      type: String
    },
    id: {
      default: "",
      type: String
    },
    description: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      color: null
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      Vibrant.from(this.img)
        .getPalette()
        .then(palette => {
          if (palette.Vibrant) {
            this.color = palette.Vibrant._rgb;
          } else {
            this.color = palette.Muted._rgb;
          }
        });
    }
  }
};
</script>
