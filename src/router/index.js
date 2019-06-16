import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/nav/topNav.vue'
import LeftNav from '@/components/nav/leftNav.vue'
import NotFound from '@/components/404.vue'
import Home from '@/views/home.vue'
import MainIndex from '@/views/main/index.vue'
import Export from '@/views/tool/export.vue'
import Animation from '@/views/tool/animation.vue'
import HorseRaceLamp from '@/views/tool/horseRaceLamp.vue'
import UploadImg from '@/views/tool/uploadImg.vue'
import elTable from '@/views/table/elTable.vue'
import dgTable from '@/views/table/dgTable.vue'
import treeTable from '@/views/table/treeTable.vue'
import treeTransfer from '@/views/treeTransfer/index.vue'
import treeDragTransfer from '@/views/treeTransfer/treeDragTransfer.vue'
import selectTable from '@/views/select/index.vue'
// import permission from '@/views/permission/index.vue'

// 懒加载方式，当路由被访问的时候才加载对应组件
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/',
          name: 'elGrid 表格',
          components: {
            default: elTable,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,
          
        },
        {
          path: '/dgTable',
          name: 'dgTable 表格',
          components: {
            default: dgTable,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,

        },
        {
          path: '/treeTable',
          name: 'treeTable 表格',
          components: {
            default: treeTable,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,

        },
        {
          path: '/treeTransfer',
          name: '树形穿越框',
          components: {
            default: treeTransfer,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,

        },
        {
          path: '/treeDragTransfer',
          name: '树形可拖拽穿越框',
          components: {
            default: treeDragTransfer,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,

        },
        {
          path: '/selectTable',
          name: '下拉表格(带复选框)',
          components: {
            default: selectTable,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,

        },
        {
          path: '/ChinaMap',
          name: '中国地图',
          components: {
            default: MainIndex,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,
          
        },
        {
          path: '/tool/index',
          name: '导出/入Excel',
          components: {
            default: Export,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,
          
        },
        {
          path: '/tool/animation',
          name: '数字动画',
          components: {
            default: Animation,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/tool/horseRaceLamp',
          name: 'vue跑马灯',
          components: {
            default: HorseRaceLamp,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/tool/uploadImg',
          name: '上传图片',
          components: {
            default: UploadImg,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
    next()
});

export default router
