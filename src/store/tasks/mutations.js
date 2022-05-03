import { MUTATION_TYPE as MT } from '@/store/dictionary';

/**
 * Возвращает максимальный id в списке объектов
 * @param taskList {Task[]}
 * @returns {number}
 */
const getMaxId = (taskList) => (
  taskList.reduceRight((maxId, task) => Math.max(maxId, task.id), 0)
);

export default {
  [MT.TASK_COMPLETE]: (state, id) => {
    const task = state.current.values.remove(id);
    if (task) state.completed.values.unshift(task);
  },

  [MT.TASK_UNCOMPLETE]: (state, id) => {
    const task = state.completed.values.remove(id);
    if (task) state.current.values.push(task);
  },

  [MT.TASK_COMPLETED_LOADING]: (state) => {
    state.completed.loading = true;
  },

  /**
   * @param state
   * @param data {Task[]}
   */
  [MT.TASK_SET_COMPLETED](state, data) {
    state.completed.values = data;
    state.lastInsertedId = Math.max(getMaxId(data), state.lastInsertedId);
    state.completed.loading = false;
  },

  [MT.TASK_CURRENT_LOADING]: (state) => {
    state.current.loading = true;
  },

  /**
   * @param state
   * @param data {Task[]}
   */
  [MT.TASK_SET_CURRENT](state, data) {
    state.current.values = data;
    state.lastInsertedId = Math.max(getMaxId(data), state.lastInsertedId);
    state.current.loading = false;
  },

  /**
   * @param state
   * @param task {Task}
   */
  [MT.TASK_PREPARE]: (state, task) => {
    state.cache.preparedTask = task;
  },

  /**
   * @param state
   * @param id {number}
   */
  [MT.TASK_REMOVE]: (state, id) => {
    if (!state.current.values.remove(id)) {
      state.completed.values.remove(id);
    }
  },

  /**
   * @param state
   * @param data {object}
   */
  [MT.TASK_UPDATE]: (state, data) => {
    let task = state.current.values.find(data.id);
    if (!task) task = state.completed.values.find(data.id);
    if (task) task.update(data);
  },
};
