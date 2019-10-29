<template>
  <div >
    首页

    <router-link :to="{name:'VueInstruction',params:{id:123}}">跳转</router-link>

    <gButtonCom :btnStyle="obj"  :clickBtnEvent="clickThisBtn" v-on:clickCallBack="clickCallBackFn">
      <h1>slot插槽</h1>
      <h3>xxx</h3>
      <div slot="asd">
        sfsdfsdf
      </div>
      <div slot-scope="lkjsdlfj">
        {{lkjsdlfj.testName}}
      </div>
      </gButtonCom>
  </div>
</template>

<script>

import gButtonCom from '@/components/common/button'

export default {
  
  data(){
    return {
      obj:{
        color:'red',
        fontSize:'20px',
      }
      }
  },
  components:{
    gButtonCom
  },
  methods:{
    clickCallBackFn(f){
      f();
    },
    clickThisBtn(param){
      console.log(param);
      //this.$router.push({path:'/VueInstruction',query:{id:123}});
      this.$router.push({path:'/VueInstruction',params:{id:123}});
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
