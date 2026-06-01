<template>
  <div class="person">
    <h2>

    </h2>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '13888888888'
      }
    }
    
  }
</script>
<style>
.person{
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>