<template>
  <div class="container">
    <category title="美食">
      <img  slot="footer" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </category>
    <!-- 具名插槽用法 -->
    <category title="游戏" >
      <!-- slot-scope作用域插槽 -->
        <ul slot="footer" slot-scope="atguigu">
          <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
    </category>
    <category title="电影">
      <!-- <video src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> -->
    </category>
  </div>
</template>

<script>
  import Category from './components/Category.vue';
  export default {
    name: 'App',
    components: { Category },
    data(){
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
      }
    }
  }
</script>
<style>
 .container{
  display: flex;
  justify-content: space-around;
 }
  video{
    width: 100%;
  }
</style>