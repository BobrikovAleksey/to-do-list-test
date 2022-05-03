<template>
  <div class="modal fade" id="editTask" tabindex="-1" data-bs-backdrop="static"
       data-bs-keyboard="false" aria-labelledby="editTaskLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editTaskLabel">
            {{ preparedTask ? 'Редактирование задачи' : 'Создание задачи' }}
          </h5>

          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Закрыть"/>
        </div>

        <div class="modal-body">
          <form id="form-edit-task" @submit.prevent="handleSubmit">
            <div class="mb-3">
              <input class="form-control" name="title" placeholder="Название задачи" required
                     :value="preparedTask?.title ?? ''">
            </div>

            <div class="mb-3">
              <textarea class="form-control" name="description" maxlength="512" rows="7"
                        placeholder="Описание" :value="preparedTask?.description ?? ''"></textarea>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Отменить</button>

          <button class="btn btn-success" type="submit" form="form-edit-task"
                  data-bs-dismiss="modal">{{ preparedTask ? 'Сохранить' : 'Добавить' }}</button>
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
  methods: {
    ...mapActions('tasks', {
      updateTask: 'update',
    }),
    handleSubmit(event) {
      const els = event.target.elements;
      const data = {
        title: els.title.value,
        description: els.description.value,
      };
      if (this.preparedTask) {
        this.updateTask({ ...this.preparedTask, ...data });
      } else {
        console.log(data);
      }
    },
  },
  computed: {
    ...mapGetters('tasks', ['preparedTask']),
  },
  mounted() {
    if (!window.$bs) window.$bs = {};
    if (!window.$bs.modal) window.$bs.modal = {};
    window.$bs.modal.editTask = new Modal(this.$el);
  },
};
</script>

<style scoped lang="scss">
textarea.form-control {
  resize: none;
};
</style>
