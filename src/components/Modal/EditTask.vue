<template>
  <div class="modal fade" id="editTask" tabindex="-1" data-bs-backdrop="static"
       data-bs-keyboard="false" aria-labelledby="editTaskLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editTaskLabel">
            {{ (this.preparedTask?.id > 0) ? 'Редактирование задачи' : 'Создание задачи' }}
          </h5>

          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Закрыть"/>
        </div>

        <div class="modal-body">
          <form id="form-edit-task" @submit.prevent="confirm = true">
            <div class="mb-3">
              <input class="form-control" name="title" placeholder="Название задачи" required
                     v-model="title">
            </div>

            <div class="mb-3">
              <textarea class="form-control" name="description" maxlength="512" rows="7"
                        placeholder="Описание" v-model="description"></textarea>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Отменить</button>

          <button class="btn btn-success" type="submit" form="form-edit-task"
                  data-bs-dismiss="modal" :disabled="!title.length">
            {{ (this.preparedTask?.id > 0) ? 'Сохранить' : 'Добавить' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditTask',
  data() {
    return {
      confirm: false,
      title: '',
      description: '',
    };
  },
  computed: {
    ...mapGetters('tasks', ['preparedTask']),
  },
  methods: {
    ...mapActions('tasks', {
      appendTask: 'append',
      addTask: 'add',
      prepareTask: 'prepare',
      updateTask: 'update',
    }),
    handleBeforeShow() {
      this.confirm = false;
      this.title = this.preparedTask?.title ?? '';
      this.description = this.preparedTask?.description ?? '';
    },
    handleSubmit() {
      if (this.confirm) {
        const data = {
          title: this.title,
          description: this.description,
        };
        if (this.preparedTask.id > 0) {
          this.updateTask({ ...this.preparedTask, ...data });
        } else if (this.preparedTask.id < 0) this.addTask(data);
        else this.appendTask(data);
      }
      this.prepareTask(null);
    },
  },
  mounted() {
    if (!window.$bs) window.$bs = {};
    if (!window.$bs.modal) window.$bs.modal = {};
    window.$bs.modal.editTask = new Modal(this.$el);
    this.$el.addEventListener('show.bs.modal', () => { this.handleBeforeShow(); });
    this.$el.addEventListener('hidden.bs.modal', () => { this.handleSubmit(); });
  },
};
</script>

<style scoped lang="scss">
textarea.form-control {
  resize: none;
};
</style>
