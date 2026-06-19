<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot name="footer" :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'CateGory',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  }
}
</script>

<style>
  .category{
    background-color: pink;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: skyblue;
  }
  img{
    width: 100%;
  }
</style>