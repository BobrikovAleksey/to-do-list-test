// import Task from '@/store/classes/Task';
import { MUTATION_TYPE as MT } from '@/store/dictionary';

/**
 * Возвращает максимальный id в списке объектов
 * @param taskList {Task[]}
 * @returns {number}
 */
const getMaxId = (taskList) => (
  taskList.reduceRight((max, { id }) => Math.max(id, max), 0)
);

export default {
  [MT.TASK_CURRENT_LOADING]: (state) => {
    state.current.loading = true;
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

  /**
   * @param state
   * @param data {Task[]}
   */
  [MT.TASK_SET_COMPLETED](state, data) {
    state.completed.values = data;
    state.lastInsertedId = Math.max(getMaxId(data), state.lastInsertedId);
    state.completed.loading = false;
  },
};
