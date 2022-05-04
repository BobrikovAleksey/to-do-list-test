import Task from '@/store/classes/Task';
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
  /**
   * @param state
   * @param data {Task[]}
   */
  [MT.TASK_SET_COMPLETED](state, data) {
    state.completed.values = data;
    state.lastInsertedId = Math.max(getMaxId(data), state.lastInsertedId);
    state.completed.loading = false;
  },

  [MT.TASK_COMPLETED_LOADING]: (state) => {
    state.completed.loading = true;
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

  [MT.TASK_CURRENT_LOADING]: (state) => {
    state.current.loading = true;
  },

  [MT.TASK_COMPLETE]: (state, id) => {
    const task = state.current.values.remove(id);
    if (task) state.completed.values.unshift(task);
  },

  [MT.TASK_UNCOMPLETE]: (state, id) => {
    const task = state.completed.values.remove(id);
    if (task) state.current.values.push(task);
  },

  /**
   * @param state
   * @param data {object}
   */
  [MT.TASK_ADD]: (state, data) => {
    const { insertDir, preparedId } = state.cache;
    const { values } = state.current;
    const pos = values.findIndex(preparedId) + insertDir;
    console.log(preparedId);
    console.log(pos);
    console.log(data);
    // state.lastInsertedId += 1;
    // state.current.values.insert(pos, new Task(state.lastInsertedId, data));
  },

  /**
   * @param state
   * @param data {object}
   */
  [MT.TASK_APPEND]: (state, data) => {
    state.lastInsertedId += 1;
    state.current.values.push(new Task(state.lastInsertedId, data));
  },

  /**
   * @param state
   * @param id {number}
   */
  [MT.TASK_PREPARE_ID]: (state, id) => {
    state.cache.preparedId = id;
  },

  /**
   * @param state
   * @param dir {number}
   */
  [MT.TASK_PREPARE_INSERT_DIR]: (state, dir) => {
    state.cache.insertDir = dir;
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
