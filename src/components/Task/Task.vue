<template>
  <div class="accordion-item">
    <Header class="d-flex align-items-start" :task="task" :completed="completed"
            :collapse-id="collapseId" :dropdown-id="dropdownId" :heading-id="headingId"/>

    <Collapse :task="task" :collapse-id="collapseId" :heading-id="headingId"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Collapse from './Collapse.vue';
import Header from './Header/Header.vue';

export default {
  name: 'Task',
  props: {
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
    ...mapGetters(['currentPage']),
    collapseId() {
      return `${this.currentPage}-collapse-task-${this.task.id}`;
    },
    dropdownId() {
      return `${this.currentPage}-dropdown-task-${this.task.id}`;
    },
    headingId() {
      return `${this.currentPage}-heading-task-${this.task.id}`;
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
