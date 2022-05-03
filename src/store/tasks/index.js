import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  current: {
    values: [],
    loading: false,
  },
  completed: {
    values: [],
    loading: false,
  },
  lastInsertedId: 0,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
