import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
//引用Main.vue
import Main  from '../views/Main.vue'
//引用CourseList.vue
import CourseList from '../views/courses/CourseList.vue'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    //引用组件
    component: Main,
    //创建一个子路由，几乎所有的路由都在子路由里面
    //这个children本来是没有自动提示的，我们一定要在const routes:RouteConfig[]后面添加
    //RouteConfig[]这个数据类型，才能使用children
    //这里我们是参考以下代码中的routes来定义的RouteConfig[]类型的数组
    // const router = new VueRouter({
    //   routes
    // })
    children:[
      {name:'home',path:'/',component:Home},
      // 增加课程列表路由
      {name:'courses-list',path:'/courses/list',component:CourseList}
    ]
  }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
