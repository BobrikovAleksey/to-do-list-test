<template>
  <ul class="dropdown-menu" :aria-labelledby="dropdownId">
    <li><Item icon="arrow-bar-up" title="Добавить задачу выше" data-bs-toggle="modal"
              data-bs-target="#editTask" @click="handleInsert(-1)" disabled/></li>

    <li><Item icon="arrow-bar-down" title="Добавить задачу ниже" data-bs-toggle="modal"
              data-bs-target="#editTask" @click="handleInsert(+1)" disabled/></li>

    <li>
      <Item icon="pencil" title="Изменить задачу" data-bs-toggle="modal" data-bs-target="#editTask"
            @click="prepareTask(task.id)"/>
    </li>

    <li><hr class="dropdown-divider"></li>

    <li><h6 class="dropdown-header">Срок выполнения</h6></li>

    <li class="d-flex">
      <div class="btn-group ms-3" role="group">
        <RadioItem v-for="(item, key) in schedulerList" :key=key group="scheduler"
                   :item="item" :task="task"/>
      </div>

      <button class="btn btn-sm btn-outline-secondary ms-3" title="Назначить срок..."
              data-bs-tooltip="dropdown" data-bs-placement="bottom" disabled>
        <i class="bi bi-calendar2-event"></i>
      </button>
    </li>

    <li><h6 class="dropdown-header">Приоритет</h6></li>

    <li>
      <div class="btn-group ms-3" role="group">
        <RadioItem v-for="(item, key) in priorityList" :key=key group="priority"
                   :item="item" :task="task"/>
      </div>
    </li>

    <li><hr class="dropdown-divider"></li>

    <li><Item icon="arrow-right-circle" title="Перенести в проект" disabled/></li>

    <li><Item icon="files" title="Дублировать" disabled/></li>

    <li><hr class="dropdown-divider"></li>

    <li>
      <Item icon="trash3" title="Удалить задачу" data-bs-toggle="modal" data-bs-target="#removeTask"
            @click="prepareTask(task.id)"/>
    </li>
  </ul>
</template>

<script>
import { Tooltip } from 'bootstrap';
import { mapActions } from 'vuex';
import Item from './Item.vue';
import RadioItem from './RadioItem.vue';

export default {
  name: 'Dropdown',
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
    Item,
    RadioItem,
  },
  data() {
    return {
      priorityList: [
        { value: 'high', icon: 'flag-fill red', title: 'Высокий' },
        { value: 'middle', icon: 'flag-fill yellow', title: 'Средний' },
        { value: 'low', icon: 'flag-fill blue', title: 'Низкий' },
        { value: 'none', icon: 'flag', title: 'Отсутствует' },
      ],
      schedulerList: [
        { value: 'today', icon: 'calendar2-date green', title: 'Сегодня' },
        { value: 'tomorrow', icon: 'sun yellow', title: 'Завтра' },
        { value: 'weekend', icon: 'calendar2-week purple', title: 'До конца недели' },
        { value: 'none', icon: 'slash-circle', title: 'Без срока' },
      ],
    };
  },
  methods: {
    ...mapActions('tasks', {
      prepareTask: 'prepare',
      prepareInsertDir: 'prepareInsertDir',
    }),
    handleInsert(dir) {
      this.prepareTask(-this.task.id);
      this.prepareInsertDir(dir);
    },
  },
  mounted() {
    this.$el.querySelectorAll('[data-bs-tooltip="dropdown"]').forEach((el) => new Tooltip(el));
  },
};
</script>
