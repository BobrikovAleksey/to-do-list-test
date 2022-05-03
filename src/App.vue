<template>
  <Header/>

  <main class="flex-shrink-0">
    <router-view/>
  </main>

  <Footer/>
</template>

<script>
import Footer from 'Components/Footer/Footer.vue';
import Header from 'Components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
@import '~@/styles/main';
</style>
