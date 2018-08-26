<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img src="../../assets/logo.png" style="padding-left:8px;"></a>
      </div>
      <div class="topbar-logos">
        <a href="/" style="color: #fff;">变更总览</a>
      </div>
      <div class="topbar-title">
        <el-row>
          <el-col :span="24">
            <el-menu :default-active="defaultActiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
              <el-menu-item index="/">企业信息</el-menu-item>
              <el-menu-item index="/vehicleManager">车辆信息</el-menu-item>
              <el-menu-item index="/deptManager">组织架构</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import 'element-ui/lib/theme-chalk/display.css';

  export default {
    data(){
      return {
        loading: false,
        companyName: '',
        nickname: '',
        defaultActiveIndex: '/',
        homeMenu: false,
        messageCount: 5
      }
    },
    created() {
      // 组件创建完后获取数据
      this.fetchNavData();
    },
    methods: {
      jumpTo(url){
        this.$router.push(url); //用go刷新
      },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      fetchNavData () { // 初始化菜单激活项
        var cur_path = this.$route.path; //获取当前路由
        var routers = this.$router.options.routes; // 获取路由对象
        var nav_type = "home", nav_name = "home";
        for (var i = 0; i < routers.length; i++) {
          var children = routers[i].children;
          if(children){
            for (var j = 0; j < children.length; j++) {
              if (children[j].path === cur_path) {
                nav_type = routers[i].type;
                nav_name = routers[i].name;
                break;
              }
            }
          }
        }
        this.$store.state.topNavState = nav_type;
        this.$store.state.leftNavState = nav_name;
        if(nav_type == "home"){
          this.defaultActiveIndex = "/";
        } else {
          this.defaultActiveIndex = "/" + nav_name + "Manager";
        }
      },
      logout(){
        //logout
        let that = this;
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonClass: 'el-button--warning'
        }).then(() => {
          //确认
          localStorage.removeItem('access-user');
          that.$router.go('/login'); //用go刷新
        }).catch(() => {});
      }
    },
    mounted() {
      let user = window.localStorage.getItem('access-user');
      if (user) {
        user = JSON.parse(user);
        this.nickname = user.nickname || '';
        this.companyName = user.companyName || '';
      }
    },
    watch: {
      '$route': function(to, from){ // 路由改变时执行
        //console.info("to.path:" + to.path);
        this.fetchNavData();
      }
    }
  }
</script>
