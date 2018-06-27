module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "VueAnime",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Discover trending anime"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#f57c00" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  // Modules
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  // Vuetify config
  vuetify: {
    theme: {
      primary: "#f57c00",
      secondary: "#424242",
      accent: "#82b1ff",
      error: "#f44336",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
    }
  },
  // Axios config
  axios: {
    baseURL: "https://api.jikan.moe"
  }
};
