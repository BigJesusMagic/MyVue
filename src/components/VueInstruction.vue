<template>
  <div>

    <h1>页面跳转传的参数值 </h1>
    {{$route.params.id}}
    {{$route.query.id}}

    <h1>vue指令</h1>

    <h2>v-model</h2>
    <input type="text" v-model="name" />
    {{name}}

    <div>
      <input type="radio" name="sex" v-model="selectRadio" value="true" />男
      <input type="radio" name="sex" v-model="selectRadio" value="false" />女

      <div>
        {{selectRadio}}
      </div>

      <div v-for="(v,i) in radioList" :key="i">

        <input type="radio" name="sexDe" v-model="selectRadio1" :value="v.value" />{{v.text}}
      </div>
      <div>
        {{selectRadio1}}
      </div>
    </div>

    
    <div>
      <input type="checkbox" name="selectCheck" v-model="selectCheck" value="1" />篮球
      <input type="checkbox" name="selectCheck" v-model="selectCheck" value="2" />羽毛球
      <input type="checkbox" name="selectCheck" v-model="selectCheck" value="3" />网球

      <div>
        {{selectCheck}}
      </div>

      <div v-for="(v,i) in selectCheckList" :key="i">

        <input type="checkbox" name="selectCheck1" v-model="selectCheck1" :value="v.value" />{{v.text}}
      </div>
      <div>
        {{selectCheck1}}
      </div>
    </div>

    
   <select v-model="selectSelectValue">
     <option  v-for="(v,i) in selectCheckList" :key="i" :value="v.value" >{{v.text}}</option>
   </select>
   <select v-model="selectSelectValue">
     <option  v-for="(v,i) in selectCheckList" :key="i"  >{{v.text}}</option>
   </select>
    <div>
      {{selectSelectValue}}
    </div>

  </div>
</template>

<script>

  export default {

    data() {
      return {
        name: 'jesus',
        radioList: [
          { text: '男', value: 1 },
          { text: '女', value: 0 }
        ],
        selectRadio: true,
        selectRadio1: 0,
        selectCheck: [],
        selectCheck1: [],
        selectCheckList: [
          { text: '北京', value:  '1' },
          { text: '上海', value: '2' },
          { text: '福建', value: '3'},
        ],
        selectSelectValue: '',

      }
    }

  }
</script>

<style>

</style>