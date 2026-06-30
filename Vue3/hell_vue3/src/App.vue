<template>
  <div class="app">
    <h1>Hell</h1>
    <Preson></Preson>
  </div>
</template>
<script lang="ts">
  import Preson from './components/Preson.vue';
  export default{
    name: 'App',
    components:{Preson}
  }
</script>
<style>
  .app {
    background-color: pink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>