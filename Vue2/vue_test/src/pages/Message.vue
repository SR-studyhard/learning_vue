<template>
  <div>
    <ul>
      <li v-for="m in messagelist" :key="m.id">
        <router-link :to="`/home/message/deatil?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="pushReplace(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  data(){
    return{
      messagelist: [
        {id:'01',title:'消息01'},
        {id:'02',title:'消息02'},
        {id:'03',title:'消息03'},
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        path: '/home/message/deatil',
        query: {
          id: m.id,
          title:m.title
        }
      })
    },
    pushReplace(m) {
      this.$router.replace({
        path: '/home/message/deatil',
        query: {
          id: m.id,
          title:m.title
        }
      })
    }
  }
}
</script>