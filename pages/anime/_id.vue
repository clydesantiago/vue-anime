<template>
  <v-container grid-list-xl>
    <v-layout 
      row 
      wrap>
      <v-flex 
        md4 
        xs12>
        <v-card 
          :img="items.image_url" 
          height="500px">
          <v-card-title primary-title>
            {{ items.title }}
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex 
        md8 
        xs12>
        <v-card>
          <v-card-title primary-title>
            <div class="title primary--text">{{ items.title }}</div>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-lg>
              <v-layout 
                row 
                wrap>
                <v-flex md12>
                  <div class="body-">{{ items.synopsis }}</div>
                </v-flex>
                <v-flex md6>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.type }}</v-list-tile-title>
                        <v-list-tile-sub-title>Type</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.source }}</v-list-tile-title>
                        <v-list-tile-sub-title>Source</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.episodes }}</v-list-tile-title>
                        <v-list-tile-sub-title>Episodes</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.status }}</v-list-tile-title>
                        <v-list-tile-sub-title>Status</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
                <v-flex md6>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.rating }}</v-list-tile-title>
                        <v-list-tile-sub-title>Rating</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ items.popularity }}</v-list-tile-title>
                        <v-list-tile-sub-title>Popularity</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          <div 
                            v-for="(genre, index) in items.genre" 
                            :key="'genre' + index">
                            {{ genre.name }},
                          </div>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>Genre</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios.get("/anime/" + context.params.id).then(res => {
      return {
        items: res.data
      };
    });
  }
};
</script>
