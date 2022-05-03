export default {
  // cache
  preparedTask: (state) => state.cache.preparedTask,
  // tasks
  completed: (state) => state.completed.values,
  completedLoading: (state) => state.completed.loading,
  current: (state) => state.current.values,
  currentLoading: (state) => state.current.loading,
};
