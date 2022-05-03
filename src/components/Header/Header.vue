<template>
  <header>
    <nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">
      <div class="container container-fluid">
        <a class="navbar-brand" href="/">ToDo List</a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <Nav/>

          <SearchForm/>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Nav from './Nav.vue';
import SearchForm from './SearchForm.vue';

export default {
  name: 'Header',
  components: {
    Nav,
    SearchForm,
  },
};
</script>
