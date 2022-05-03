import { createStore } from 'vuex';
import { MUTATION_TYPE as MT, pages } from './dictionary';
import tasks from './tasks';

export default createStore({
  state: {
    page: pages.incoming,
  },
  mutations: {
    [MT.CHANGE_PAGE]: (state, newPage) => {
      state.page = newPage;
    },
  },
  actions: {
    /**
     * @param commit
     * @param state
     * @param newPage {string}
     */
    changePage({ commit, state }, newPage) {
      if (pages[newPage] && (pages[newPage] !== state.page)) {
        commit(MT.CHANGE_PAGE, newPage);
      }
    },
  },
  getters: {
    currentPage: (state) => state.page,
  },
  modules: {
    tasks,
  },
});
