// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: false },
  build:{
    transpile:["vuetify"]
  },
  css:[
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ], 
})
