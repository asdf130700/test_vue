<template>
  <div id="app">
  <router-view name="top"></router-view>
    <router-view></router-view>


  </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'

    export default {
        // name: 'App',
        // components: {
        //     HelloWorld
        // }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
//import router from '@/router'
// mounted (){
//     router.push("/login")
// }
