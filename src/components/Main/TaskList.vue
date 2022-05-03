<template>
  <div class="accordion col-12 col-lg-10" id="main-accordion">
    <Task class="p-2" v-for="task in currentTasks" :key="task.id" :task="task"/>
    <Task class="p-2" v-for="task in completedTasks" :key="task.id" :task="task" :completed="true"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from 'Components/Task/Task.vue';

export default {
  name: 'TaskList',
  components: {
    Task,
  },
  computed: {
    ...mapGetters('tasks', {
      currentTasks: 'current',
      completedTasks: 'completed',
    }),
  },
};
</script>
