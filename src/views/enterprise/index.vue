<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-dropdown split-button type="primary" @command="handleClick">
          时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dataList" :command="item.id">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @command="handleClick">
          时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dataList" :command="item.id">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @command="handleClick">
          时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dataList" :command="item.id">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @command="handleClick">
          时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dataList" :command="item.id">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @command="handleClick">
          时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dataList" :command="item.id">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    data() {
      return {
        dataList: [
          {id: '1', name: '年'},
          {id: '2', name: '月'},
          {id: '3', name: '日'}
        ],
        formInline: {}
      }
    },
    methods: {
      handleClick(key) {
        console.log(key);
      }
    }
  }
</script>