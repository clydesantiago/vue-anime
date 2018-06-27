<template>
  <v-layout 
    row 
    wrap>
    <v-flex md12>
      <v-jumbotron
        :gradient="'to top right, rgba(0, 0, 0, 0.7), rgba(245, 124, 0, 0.49)'"
        height="500px"
        src="/maxresdefault.jpg"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to VueAnime</h3>
              <span class="subheading">
                Endeavoring to find that anime? Search from countless titles on VueAnime, one the biggest online anime and manga searching site on the planet!
              </span>
              <v-divider class="my-3"/>
              <div class="title mb-3">Check out our newest animes!</div>
              <v-btn 
                large 
                color="primary" 
                class="mx-0" 
                @click="$router.push('/popular')">Discover Animes</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-flex>
    <v-flex md12>
      <v-container 
        grid-list-lg 
        fluid>
        <v-layout 
          row 
          wrap>
          <v-flex 
            v-for="(feature, index) in features" 
            :key="'feature-' + index" 
            md4>
            <v-card height="100%">
              <v-card-media
                :src="feature.img"
                contain
                height="200px"
              >
                <v-container fill-height>
                  <v-layout 
                    justify-center 
                    align-center>
                    <v-flex 
                      md12 
                      text-md-center 
                      style="background-color:#000000e0">
                      <span class="display-3 primary--text">
                        {{ feature.title }}
                        <v-icon 
                          color="primary" 
                          size="50">{{ feature.icon }}</v-icon>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
                <span>{{ feature.text }}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: "/Naruto-Kurama.jpg",
          title: "Search",
          icon: "search",
          text:
            "Whether you are an anime veteran or just starting out, at VueAnime you can quickly find a huge selection of manga, anime and related products."
        },
        {
          img: "/one-pice-live-in-action-2018.jpg",
          title: "Browse",
          icon: "list_alt",
          text:
            "Find new anime to look at via browsing our genres. We cowl everything from motion and adventure to Shonen and Sci-Fi. Find your next preferred anime now."
        },
        {
          img:
            "/one-punch-man-genos-wallpapers-photo-On-Wallpaper-1080p-HD.png",
          title: "Watch",
          icon: "live_tv",
          text:
            "Watch anime online in high quality with English dubbed + subbed. Here you can watch online anime without paying, registering"
        }
      ]
    };
  }
};
</script>
