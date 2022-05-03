<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container container-fluid">
      <span class="text-muted">© github.com/BobrikovAleksey {{ year }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: () => (new Date()).getFullYear(),
  },
};
</script>
