<template>
  <div class="container container-fluid d-flex flex-column align-items-center py-5">
    <h1 class="col-12 col-lg-10 mb-4">Входящие</h1>

    <TaskList/>
  </div>
</template>

<script>
import TaskList from 'Components/Main/TaskList.vue';

export default {
  name: 'Main',
  components: {
    TaskList,
  },
};
</script>
