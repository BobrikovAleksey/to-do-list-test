<template>
  <Header/>

  <main class="flex-shrink-0">
    <router-view/>
  </main>

  <Footer/>
</template>

<script>
import { mapActions } from 'vuex';
import Footer from 'Components/Footer/Footer.vue';
import Header from 'Components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  methods: {
    ...mapActions('tasks', ['fetchCurrentTasks', 'fetchCompletedTasks']),
  },
  beforeMount() {
    this.fetchCurrentTasks();
    this.fetchCompletedTasks();
  },
};
</script>

<style lang="scss">
@import '~@/styles/main';
</style>
