<template>
  <div >
    <div class="sideBar">
        <ul>
            <li>
                <router-link to="/Home">首页</router-link>
            </li>
            <li>
                <router-link to="/VueInstruction">指令</router-link>
            </li>
            <li>
                <router-link to="/gButtonCom">公告button组件</router-link>
            </li>
            <li>
                <router-link to="/ref">ref使用</router-link>
            </li>
            <li>
                <router-link to="/gaodeMap">高德地图</router-link>
            </li>
            <li>
                <router-link to="/Echarts">echarts图表</router-link>
            </li>
            <li>
                <router-link to="/News">新闻</router-link>
            </li>
            <li>列表</li>
        </ul>
    </div>
    
    <div class="rightContent">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      
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
