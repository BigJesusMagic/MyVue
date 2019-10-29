<template>
  <div >
    <button :style="{color:btnStyle.color,'font-size':btnStyle.fontSize}" @click="action()"> 按钮</button>
    {{btnStyle}}
    <slot></slot>
    <slot name="asd"></slot>
    <slot testName="作用域插槽测试"></slot>
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      
      }
  },
  props:['btnStyle','clickBtnEvent'],
  methods:{
      action(){
          console.log(this.clickBtnEvent)
          this.$emit('clickCallBack',this.clickBtnEvent);
      }
  }
}
</script>

<style>

</style>
