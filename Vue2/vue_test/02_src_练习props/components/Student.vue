
<template>
  <!-- 组件的结构 -->
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>
<script>
  // 组件交互相关的代码
  export default {
    name:'StudentName',
    data() {
      return {
        msg: 'atguigu',
      }
    },
  // props: ['name', 'age'] //简单接收
    //接收时限制类型
    // props: {
    //   name: String,
    //   age:Number
    // }
    props: {
      name: {
        type: String, //name的类型
        required:true //name是必要的
      },
      age: {
        type: Number,
        default:99 //默认值
      }
    }
  }
  
</script>
