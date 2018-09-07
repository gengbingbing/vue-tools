import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/nav/topNav.vue'
import LeftNav from '@/components/nav/leftNav.vue'
import Home from '@/views/home.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import EnterpriseValidate from '@/views/enterprise/validate.vue'
import MainIndex from '@/views/main/index.vue'
import NotFound from '@/components/404.vue'

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
          path: '/enterprise/index',
          name: '导出/入Excel',
          components: {
            default: EnterpriseList,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true,
          
        },
        {
          path: '/enterprise/detail',
          name: '数字动画',
          components: {
            default: EnterpriseDetail,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/enterprise/add',
          name: 'vue跑马灯',
          components: {
            default: EnterpriseAdd,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          // iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/enterprise/validate',
          name: '企业认证',
          components: {
            default: EnterpriseValidate,
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
