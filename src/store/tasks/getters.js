export default {
  // cache
  removedTask: (state) => state.cache.removedTask,
  // tasks
  completed: (state) => state.completed.values,
  completedLoading: (state) => state.completed.loading,
  current: (state) => state.current.values,
  currentLoading: (state) => state.current.loading,
};
