<template>
  <div class="accordion-header d-flex" :id="headingId">
    <LeftPanel class="d-flex" :task="task" :completed="completed" :collapseId="collapseId"/>

    <div class="d-flex flex-column task-body px-3">
      <h5>{{ task.title }}</h5>

      <p class="mb-2">{{ task.description }}</p>
    </div>
  </div>
</template>

<script>
import LeftPanel from './LeftPanel/LeftPanel.vue';

export default {
  name: 'Header',
  props: {
    task: {
      type: Object,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    collapseId: {
      type: String,
      required: true,
    },
    headingId: {
      type: String,
      required: true,
    },
  },
  components: {
    LeftPanel,
  },
};
</script>

<style scoped lang="scss">
.task-body {
  width: calc(100% - 72px);

  & > h5, & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  };
}
</style>
