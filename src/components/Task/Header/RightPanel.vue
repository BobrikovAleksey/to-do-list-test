<template>
  <div>
    <button class="btn btn-sm btn-outline-secondary" type="button" title="Изменить задачу"
            data-bs-toggle="tooltip" data-bs-placement="bottom" @click="handleEditClick">
      <i class="bi bi-pencil"></i>
    </button>

    <button class="btn btn-sm btn-outline-secondary ms-2" type="button" title="Назначить срок..."
            data-bs-toggle="tooltip" data-bs-placement="bottom" disabled>
      <i class="bi bi-calendar2-event"></i>
    </button>

    <div class="btn-group dropdown-menu-end ms-2" role="group">
      <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"
              :id="dropdownId" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-three-dots"></i>
      </button>

      <Dropdown :task="task" :dropdown-id="dropdownId"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Dropdown from './Dropdown/Dropdown.vue';

export default {
  name: 'RightPanel',
  props: {
    task: {
      type: Object,
      required: true,
    },
    dropdownId: {
      type: String,
      required: true,
    },
  },
  components: {
    Dropdown,
  },
  methods: {
    ...mapActions('tasks', ['prepare']),
    handleEditClick() {
      this.prepare(this.task);
      window.$bs.modal.editTask.show();
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-toggle:after {
  display: none;
};
</style>
