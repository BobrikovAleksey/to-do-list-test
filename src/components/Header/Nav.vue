<template>
  <ul class="navbar-nav me-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/incoming" :class="{ active: isMainPage }"
                   :aria-current="isMainPage ? 'page' : ''">Входящие</router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/today" :class="{ active: isTodayPage }"
                   :aria-current="isTodayPage ? 'page' : ''">Сегодня</router-link>
    </li>

    <li class="nav-item dropdown">
      <router-link class="nav-link dropdown-toggle" to="#" id="navbarProjects" role="button"
         data-bs-toggle="dropdown" aria-expanded="false">Проекты</router-link>

      <ul class="dropdown-menu" aria-labelledby="navbarProjects">
        <li>
          <router-link class="dropdown-item" to="#">Добро пожаловать</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { pages } from '@/store/dictionary';

export default {
  name: 'Nav',
  methods: {
    ...mapActions(['changePage']),
  },
  computed: {
    ...mapGetters(['currentPage']),
    isMainPage() {
      return (this.currentPage === pages.incoming);
    },
    isTodayPage() {
      return (this.currentPage === pages.today);
    },
  },
  watch: {
    // eslint-disable-next-line
    '$route.path'(route) {
      const routeName = route.match(/\w+/);
      if (routeName) this.changePage(routeName[0]);
      else this.changePage(pages.incoming);
    },
  },
};
</script>
