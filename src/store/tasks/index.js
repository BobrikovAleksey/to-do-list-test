import mutations from './mutations';
import actions from './actions';

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

const getters = {
  // cache
  removedTask: () => state.cache.removedTask,
  // tasks
  completed: () => state.completed.values,
  completedLoading: () => state.completed.loading,
  current: () => state.current.values,
  currentLoading: () => state.current.loading,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
