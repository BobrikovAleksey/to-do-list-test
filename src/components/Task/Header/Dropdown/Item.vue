<template>
  <button class="dropdown-item">
    <i :class="iconClasses"></i>
    <span :class="{ 'ms-2': Boolean(icon) }">{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'Item',
  props: {
    icon: String,
    title: String,
  },
  computed: {
    iconClasses() {
      return `bi bi-${this.icon}`;
    },
  },
};
</script>
