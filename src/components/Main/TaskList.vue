<template>
  <div class="accordion col-12 col-lg-10" :id="listName">
    <Task class="p-2" v-for="task in currentTasks" :key="task.id"
          :list-name="listName" :task="task"/>
    <Task class="p-2" v-for="task in completedTasks" :key="task.id"
          :list-name="listName" :task="task" :completed="true"/>
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
  data() {
    return {
      listName: 'incoming',
    };
  },
  computed: {
    ...mapGetters({
      currentTasks: 'tasks/current',
      completedTasks: 'tasks/completed',
    }),
  },
};
</script>
