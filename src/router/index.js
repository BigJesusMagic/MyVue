import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import Table from '@/components/Table'
import VueInstruction from '@/components/VueInstruction'
import VueDoubleBind from '@/components/VueDoubleBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/VueInstruction',
      //path: '/VueInstruction/:id',
      name: 'VueInstruction',
      component: VueInstruction
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/VueDoubleBind',
      name: 'VueDoubleBind',
      component: VueDoubleBind
    },
    {
      path: '/ref',
      name: 'ref',
      component: ()=>import('@/components/module/ref')
    },
    {
      path: '/gaodeMap',
      name: 'gaodeMap',
      component: ()=>import('@/components/module/GaodeMap')
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: ()=>import('@/components/module/Echarts')
    },
  ]
})
