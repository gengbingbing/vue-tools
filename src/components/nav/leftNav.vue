<template>
  <!--左侧导航-->
  <aside>
    <!--导航菜单-->
    <el-menu router>
      <template v-for="(issue,index) in $router.options.routes">
        <template v-if="issue.name === $store.state.leftNavState">
          <template v-for="(item,index) in issue.children">
            <el-submenu v-if="!item.leaf" :index="index+''" v-show="item.menuShow">
              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow" :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
                <el-menu-item v-for="term in item.children.children" :key="term.path" :index="term.path" v-if="term.menuShow" :class="$route.path==term.path?'is-active':''">
                  <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
                </el-menu-item>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="item.leaf" :index="item.path"
                          :class="$route.path==item.path?'is-active':''" v-show="item.menuShow">
              <i :class="item.iconCls"></i><span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </aside>
</template>
<script>
  export default {
    name: 'leftNav',
    data () {
      return {
        loading: false,
      }
    },
    methods: {
      jumpTo(url){
        this.$router.push(url); //用go刷新
      }
    },
    watch: {
      '$route': function(to, from){ // 路由改变时执行
        //console.info("to.path:" + to.path);
      }
    }
  }
</script>

