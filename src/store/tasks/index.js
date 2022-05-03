// import mutations from './mutations';
// import actions from './actions';

const taskList = [
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
const taskCompletedList = [
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

const state = {
  current: {
    values: [...taskList],
    loading: false,
  },
  completed: {
    values: [...taskCompletedList],
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
  // mutations,
  // actions,
  getters,
};
