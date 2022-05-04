<template>
  <footer class="d-flex justify-content-end col-12 col-lg-10 mt-3">
    <button type="button" class="btn btn-outline-secondary"
            data-bs-toggle="modal" data-bs-target="#editTask" @click="prepareTask(0)">
      <i class="bi bi-plus-circle"></i>
      <span class="ms-2">Добавить задачу</span>
    </button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskListFooter',
  methods: {
    ...mapActions('tasks', {
      prepareTask: 'prepare',
    }),
  },
};
</script>
