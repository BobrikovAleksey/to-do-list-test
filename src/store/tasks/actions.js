import ExtendedArray from '@/store/classes/ExtendedArray';
import Task from '@/store/classes/Task';
import { MUTATION_TYPE as MT } from '@/store/dictionary';

/**
 * Создает список задач
 * @param data {Object[]}
 */
const createTasks = (data) => {
  const taskList = new ExtendedArray();
  data.forEach((task) => {
    taskList.push(new Task(task.id, task));
  });
  return taskList;
};

const currentTasks = [
  {
    id: 1,
    title: 'Задача 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.`,
  },
  {
    id: 2,
    title: 'Задача 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.`,
  },
];
const completedTasks = [
  {
    id: 5,
    title: 'Задача 5',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.`,
  },
  {
    id: 8,
    title: 'Задача 8',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
            culpa dicta earum facilis magnam molestiae numquam optio sint tenetur.`,
  },
];

const fetchData = (key) => new Promise((resolve, reject) => {
  try {
    // const data = localStorage.getItem(key);
    // resolve(JSON.parse(data));
    const data = (key === 'currentTasks')
      ? currentTasks
      : completedTasks;
    resolve(data);
  } catch (err) {
    reject(err);
  }
});

/**
 * Получает список выполненных задач
 * @param commit
 */
const fetchCompleted = ({ commit }) => {
  commit(MT.TASK_COMPLETED_LOADING);

  fetchData('completedTasks')
    .then((data) => {
      commit(MT.TASK_SET_COMPLETED, createTasks(data));
    })
    .catch(() => {
      commit(MT.TASK_SET_COMPLETED, []);
      // console.log(err);
    });
};

/**
 * Получает список текущих задач
 * @param commit
 */
const fetchCurrent = ({ commit }) => {
  commit(MT.TASK_CURRENT_LOADING);

  fetchData('currentTasks')
    .then((data) => {
      commit(MT.TASK_SET_CURRENT, createTasks(data));
    })
    .catch(() => {
      commit(MT.TASK_SET_CURRENT, []);
      // console.log(err);
    });
};

const complete = ({ commit }, id) => {
  commit(MT.TASK_COMPLETE, id);
};

const uncomplete = ({ commit }, id) => {
  commit(MT.TASK_UNCOMPLETE, id);
};

/**
 * @param commit
 * @param data {object}
 */
const add = ({ commit }, data) => {
  console.log(data);
  if (data.title) commit(MT.TASK_ADD, data);
};

/**
 * @param commit
 * @param data {object}
 */
const append = ({ commit }, data) => {
  if (data.title) commit(MT.TASK_APPEND, data);
};

/**
 * @param commit
 * @param id {number}
 */
const prepare = ({ commit }, id) => {
  commit(MT.TASK_PREPARE_ID, id);
};

/**
 * @param commit
 * @param dir {number}
 */
const prepareInsertDir = ({ commit }, dir) => {
  commit(MT.TASK_PREPARE_INSERT_DIR, dir);
};

const remove = ({ commit, state }) => {
  const { preparedId } = state.cache;
  if (preparedId) commit(MT.TASK_REMOVE, preparedId);
};

/**
 * @param commit
 * @param data {object}
 */
const update = ({ commit }, data) => {
  commit(MT.TASK_UPDATE, data);
};

export default {
  add,
  append,
  complete,
  fetchCompleted,
  fetchCurrent,
  prepare,
  prepareInsertDir,
  remove,
  uncomplete,
  update,
};
