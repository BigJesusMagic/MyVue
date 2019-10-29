<template>
  <div >
    Echarts使用

    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    
  </div>
</template>

<script>

  // 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  
  data(){
    return {
        msg:'欢迎',
        myChart:''
      }
  },
  mounted(){
    this.drawLine();
    //图表宽度自适应
     window.onresize=()=>{
       this.myChart.resize();
     }
  },
  methods:{
    drawLine(){
        //基于准备好的dom，初始化echarts实例
        //let myChart= this.$echarts.init(document.getElementById('myChart'));  //全局加载echarts的方式
        //
        this.myChart = echarts.init(document.getElementById('myChart')) ; //按需加载echarts的方式
        //绘制图表
        this.myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });


    }
  },
  
}
</script>

<style>

</style>
