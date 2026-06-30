<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <!-- <h2>电话：{{ tel }}</h2> -->
    <button @click="changeName">修改年龄</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Person',
  // data() {
  //   return {
  //     name: '张三',
  //     age: 18,
  //     tel: '13888888888'
  //     }
  // },
    // setup写法一
    // setup() {
    //   //数据
    //   let name = '张三'
    //   let age = 18
    //   let tel = '12788888888'
    //   //方法
    //   function changeName() {
    //     name = 'zhang-san'
    //   }
    //   function changeAge() {
    //     age += 1
    //   }
    //   function showTel() {
    //     alert(tel)
    //   }
    //   return{name,age,changeName,changeAge,showTel}
    // }
    
  }
</script>
<!-- setup写法二 -->
<script lang="ts" setup>
  //数据
  let name = '张三'
  let age = 18
  let tel = '12788888888'
  //方法
  function changeName() {
    name = 'zhang-san'
  }
  function changeAge() {
    age += 1
  }
  function showTel() {
    alert(tel)
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