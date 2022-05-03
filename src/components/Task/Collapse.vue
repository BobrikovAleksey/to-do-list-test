<template>
  <div class="accordion-collapse collapse" :class="{ 'show': false }"
       :id="collapseId" :aria-labelledby="headingId">
    <div class="accordion-body">
      {{ task.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    task: {
      type: Object,
      required: true,
    },
    collapseId: {
      type: String,
      required: true,
    },
    headingId: {
      type: String,
      required: true,
    },
  },
};
</script>
