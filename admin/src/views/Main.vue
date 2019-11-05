<template>
<!-- element ui 的container容器 -->
  <el-container>
    <el-aside width="200px">
      <!-- 侧边栏 -->
      <!-- 菜单 -->
      <!-- mode="vertical"垂直显示 -->
      <!-- default-active=""当前路由的路径是什么就以高亮的形式显示 -->
      <!-- router表示这个菜单是一个路由菜单 -->
      <!-- style="height:100vh" 屏幕的高度为100%-->
      <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
        <!-- 这是一个二级菜单 -->
        <el-submenu v-for="(item, index) in menu.items"
          :index="index + 1"
          :key="`menu-item-${index}`">
          <!-- 一级菜单 -->
          <template slot="title">{{item.title}}</template>
          <!-- 二级菜单 -->
          <!-- :index其实表示的是路由,决定跳到哪一个路由-->
          <!-- 每个v-for都需要一个key用于表示一个唯一的标识-->
          <!-- ${index}表示外部的index  ${subIndex}表示内部的index -->
          <el-menu-item 
          v-for="(subItem, subIndex) in item.items"
          :key="`menu-item-${index}-${subIndex}`"
          :index="subItem.path">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      
    </el-aside>
    <el-container>
      <el-header>
        <!-- 头部的内容 -->
        极课编程-后台管理界面
      </el-header>
      <el-main>
        <!-- 主内容 -->
        <!-- 它是一个子路由的容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  
  
</template>

<script lang="ts">
import {Vue,Component} from "vue-property-decorator";

//标注它是一个组件
@Component({})
export default class Main extends Vue {
  menu = {
    items:[
      {
        title:'内容管理',
        items:[
          {title:'首页',path:'/'},
          {title:'课程管理',path:'/courses/list'},
          {title:'课时管理',path:'/periods/list'}
        ]
      },
      {
        title:'运营管理',
        items:[
          {title:'用户管理',path:'/users/list'}
        ]
      }
    ]
  }
} 
</script>

<style>
/* 将body的外边距去掉 */
  body {
    margin: 0;
  }
</style>