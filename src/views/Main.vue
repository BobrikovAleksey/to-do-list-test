<template>
  <div class="container container-fluid d-flex flex-column align-items-center py-5">
    <header class="col-12 col-lg-10 pb-4">
      <h1>Входящие</h1>
    </header>

    <TaskList/>

    <TaskListFooter/>
  </div>
</template>

<script>
import TaskList from 'Components/Main/TaskList.vue';
import TaskListFooter from 'Components/TaskListFooter.vue';

export default {
  name: 'Main',
  components: {
    TaskList,
    TaskListFooter,
  },
};
</script>
