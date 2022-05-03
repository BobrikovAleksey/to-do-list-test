<template>
  <div>
    <button class="btn btn-sm btn-outline-secondary task-toggler" :class="{ 'collapsed': true }"
            type="button" :data-bs-target="`#${collapseId}`" data-bs-toggle="collapse"
            :aria-controls="collapseId" :aria-expanded="false">
      <i class="bi bi-chevron-right"></i>
    </button>

    <input :class="statusClasses" type="checkbox" v-model="status" @change="changeStatus">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LeftPanel',
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
  },
  data() {
    return {
      status: this.completed,
    };
  },
  methods: {
    ...mapActions('tasks', ['complete', 'uncomplete']),
    changeStatus() {
      if (this.status) this.complete(this.task.id);
      else this.uncomplete(this.task.id);
    },
  },
  computed: {
    statusClasses() {
      return `task-status task-status-${this.task.priority} mt-1 ms-3`;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'index';
</style>
