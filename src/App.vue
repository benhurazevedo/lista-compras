<template>
  <div id="main">
    <titulo></titulo>
    <router-view></router-view>
  </div>
</template>

<script>
import titulo from './titulo.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,components: {titulo}
}
</script>

<style scoped>
  #main{
    width: 40%;
    background-color:lightgray;
    padding-top: 6px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 6px;
    margin-top: 0;
  }


</style>
