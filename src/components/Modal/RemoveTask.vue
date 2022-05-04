<template>
  <div class="modal fade" id="removeTask" tabindex="-1" data-bs-backdrop="static"
       data-bs-keyboard="false" aria-labelledby="removeTaskLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="removeTaskLabel">Удаление задачи</h5>

          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Закрыть"/>
        </div>

        <div class="modal-body">
          <p>Вы уверены, что хотите удалить задачу: <b>{{ preparedTask?.title }}</b>?</p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Отменить</button>

          <button class="btn btn-danger" type="button" data-bs-dismiss="modal"
                  @click="confirm = true">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RemoveTask',
  data() {
    return {
      confirm: false,
    };
  },
  methods: {
    ...mapActions('tasks', {
      removeTask: 'remove',
      prepareTask: 'prepare',
    }),
    handleRemove() {
      if (this.confirm) {
        this.removeTask();
        this.prepareTask(null);
      }
    },
  },
  computed: {
    ...mapGetters('tasks', ['preparedTask']),
  },
  mounted() {
    if (!window.$bs) window.$bs = {};
    if (!window.$bs.modal) window.$bs.modal = {};
    window.$bs.modal.removeTask = new Modal(this.$el);
    this.$el.addEventListener('show.bs.modal', () => { this.confirm = false; });
    this.$el.addEventListener('hidden.bs.modal', () => { this.handleRemove(); });
  },
};
</script>
