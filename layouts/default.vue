<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="navigationDrawer" 
      app 
      clipped 
      width="220">
      <v-list>
        <v-list-tile :to="'/'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile :to="'/popular'">
          <v-list-tile-action>
            <v-icon>whatshot</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Popular</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="'/best-rated'">
          <v-list-tile-action>
            <v-icon>star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Best Rated</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="'/upcoming'">
          <v-list-tile-action>
            <v-icon>spa</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Upcoming</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="'/special'">
          <v-list-tile-action>
            <v-icon>loop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Special</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      app 
      clipped-left 
      dense>
      <v-toolbar-side-icon @click="navigationDrawer = !navigationDrawer"/>
      <img 
        src="/logo.png" 
        alt="alt">
      <v-spacer/>
      <v-text-field
        v-model="search"
        placeholder="Search Anime..."
        prepend-icon="search"
        clearable
      />
    </v-toolbar>
    <v-content>
      <nuxt v-if="!search"/>
      <v-container 
        v-else 
        grid-list-lg>
        <v-layout 
          row 
          wrap>
          <v-flex md12>
            <h1>Search <v-progress-circular 
              v-if="loading" 
              indeterminate 
              color="primary"/></h1>
          </v-flex>
          <v-flex 
            v-for="(item, index) in searchResult" 
            :key="index" 
            md3>
            <anime
              :title="item.title"
              :img="item.image_url"
              :description="item.description"
              :id="item.mal_id"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer 
      height="auto" 
      app 
      absolute 
      inset>
      <v-layout 
        row 
        wrap 
        justify-center>
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          color="white"
          flat
          @click="openTab(link.url)"
        >
          {{ link.title }}
        </v-btn>
        <v-flex 
          xs12 
          py-3 
          text-xs-center 
          white--text>
          &copy;2018 — <strong>Clyde Santiago</strong>
          <div>
            <small>This is an open-source project.</small>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import debounce from "lodash.debounce";
import Anime from "@/components/Anime.vue";

export default {
  components: {
    Anime
  },
  data() {
    return {
      loading: false,
      search: "",
      navigationDrawer: false,
      links: [
        { title: "Github", url: "https://github.com/clydesantiago" },
        { title: "Facebook", url: "https://web.facebook.com/dexterdev02" },
        { title: "My Website", url: "https://clydesantiago.com/" }
      ],
      searchResult: null
    };
  },
  watch: {
    search: debounce(function() {
      this.searchAnime();
    }, 1000),
    "$route.fullPath": function() {
      this.search = "";
    }
  },
  methods: {
    gago() {
      alert("tangina");
    },
    searchAnime() {
      if (!this.search) return;
      this.loading = true;
      this.$axios
        .get("/search/anime/" + this.search)
        .then(res => {
          this.searchResult = res.data.result;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    openTab(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
