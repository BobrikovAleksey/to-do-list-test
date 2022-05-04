import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  cache: {
    // позиция, подготовленная для вставки задачи
    preparedPos: null,
    // идентификатор задачи, подготовленной для CRUD-операций
    preparedId: null,
  },
  // текущие задачи (незавершенные)
  current: {
    values: [],
    loading: false,
  },
  // завершенные задачи
  completed: {
    values: [],
    loading: false,
  },
  // идентификатор последней добавленной задачи (для сохранения уникальности)
  lastInsertedId: 0,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
