<template>
  <div id="app">
    <Content/>
  </div>
</template>

<script>
import test from './test.js'

import Content from '@/components/Content'

export default {
  name: 'App',
  data(){
    return {
      testObj:test}
  },
  components:{
    Content,
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
