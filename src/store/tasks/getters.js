import Task from '@/store/classes/Task';

export default {
  // cache
  preparedTask: (state) => {
    const { preparedId } = state.cache;
    if (typeof preparedId !== 'number') return null;
    let task = state.current.values.find(preparedId);
    if (!task) task = state.completed.values.find(preparedId);
    if (!task) task = new Task(preparedId, { title: '' });
    return task.getCopy(preparedId);
  },
  // tasks
  completed: (state) => state.completed.values,
  completedLoading: (state) => state.completed.loading,
  current: (state) => state.current.values,
  currentLoading: (state) => state.current.loading,
};
