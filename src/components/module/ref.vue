<template>
  <div >
    ref使用  用来操作DOM

    <input type="text" ref="rInput">

    <h1 ref=h1>1232</h1>

    <button @click="clickFocus">点击获取输入框焦点</button>
    
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      
      }
  },
  methods:{
    clickFocus(){
        this.$refs.rInput.focus();
        this.$refs.h1.innerHTML='sddfjkl';
    }
  }
  
}
</script>

<style>
.sideBar{
    width: 30%;
    float: left;
}
.rightContent{
    width: 70%;
    float: left;
}
</style>
