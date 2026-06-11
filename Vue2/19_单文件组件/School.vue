<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我显示学校名称</button>
  </div>
</template>
<script>
  // 组件交互相关的代码
export default {
    name:'School',
    data() {
      return {
        name: '尚硅谷',
        address: 'beijing',
      }
    },
    methods: {
      showName() {
        alert(this.name)
      }
    },
  }
  
</script>
<style>
  /* 组件样式相关的代码 */
  .demo{
    background-color: pink;
  }
</style>