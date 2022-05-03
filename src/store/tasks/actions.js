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
  {
    id: 3,
    title: 'Задача 3',
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
  {
    id: 9,
    title: 'Задача 9',
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
const fetchCompletedTasks = ({ commit }) => {
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
const fetchCurrentTasks = ({ commit }) => {
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

export default {
  fetchCompletedTasks,
  fetchCurrentTasks,
};