<template>
  <div class="accordion-item">
    <Header class="d-flex align-items-start" :task="task" :completed="completed"
            :collapseId="collapseId" :headingId="headingId"/>

    <Collapse :task="task" :collapseId="collapseId" :headingId="headingId"/>
  </div>
</template>

<script>
import Collapse from './Collapse.vue';
import Header from './Header/Header.vue';

export default {
  name: 'Task',
  props: {
    listName: {
      type: String,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Collapse,
    Header,
  },
  computed: {
    collapseId() {
      return `${this.listName}-collapse-task-${this.task.id}`;
    },
    headingId() {
      return `${this.listName}-heading-task-${this.task.id}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/config';

.accordion-item {
  border-left: none;
  border-radius: unset;
  border-right: none;
};
</style>
