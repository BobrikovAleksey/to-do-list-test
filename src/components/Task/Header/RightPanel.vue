<template>
  <div>
    <button class="btn btn-sm btn-outline-secondary" type="button" title="Изменить задачу"
            data-bs-tooltip="right-panel" data-bs-placement="bottom" @click="handleEditClick">
      <i class="bi bi-pencil"></i>
    </button>

    <button class="btn btn-sm btn-outline-secondary ms-2" type="button" title="Назначить срок..."
            data-bs-tooltip="right-panel" data-bs-placement="bottom" disabled>
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
import { Tooltip } from 'bootstrap';
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
    ...mapActions('tasks', {
      prepareTask: 'prepare',
    }),
    handleEditClick() {
      this.prepareTask(this.task.id);
      window.$bs.modal.editTask.show();
    },
  },
  mounted() {
    this.$el.querySelectorAll('[data-bs-tooltip="right-panel"]').forEach((el) => new Tooltip(el));
  },
};
</script>

<style scoped lang="scss">
.dropdown-toggle:after {
  display: none;
};
</style>
