<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- 路由的容器 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
//引用Vue属性的装饰器
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';

//标记这是一个组件
@Component({
  // components: {
  //   HelloWorld,
  // },
})
//这就是一个ts的组件，从Vue继承过来
export default class App extends Vue {
  //数据以及属性在类中写
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
