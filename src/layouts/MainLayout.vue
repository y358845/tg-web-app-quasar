<template>
  <q-layout view="lHh Lpr lFf" class="index">
    <header-component />
    <home-component />
    <structure-component />
    <about />

    <portfolio-component />
    <team-component />
    <division-component />
    <news-component />
    <footer-component />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {


    return {

    }
  },
  components: {
    "about": require("components/About.vue").default,
    "header-component": require("components/Header.vue").default,
    "home-component": require("components/Home.vue").default,
    "structure-component": require("components/OurStructure.vue").default,
    "portfolio-component": require("components/OurPortfolio.vue").default,
    "team-component": require("components/Team").default,
    "footer-component": require("components/Footer.vue").default,
    "division-component": require("components/Division.vue").default,
    "news-component": require("components/News.vue").default,
  },
})
</script>
<style>
.index {
  max-width: 1920px;
  margin: 0 auto;
  position: relative;


}



.q-layout,
.q-header,
.q-footer,
.q-page {
  background: #f6fbfa;

}
</style>
