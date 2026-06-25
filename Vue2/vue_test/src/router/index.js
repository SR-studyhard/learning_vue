// 该文件专门用于创建整个文件的路由器
import VueRouter from "vue-router";
//引入组件
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Deatil from "@/pages/Deatil.vue";
Deatil
Message
News
//创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'deatil',
              component: Deatil,
              props($route) {
                return { id: $route.query.id, title: $route.query.title }
              }
            }
          ]
        },
      ]
    },
  ]
})

