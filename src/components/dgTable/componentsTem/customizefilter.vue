<template>
  <div style="padding:10px">
    <div><span style="font-size:12px">我是一个用户自定义的筛选器</span></div>
    <div class="o"><el-button @click="todoSearch">点击我进行筛选</el-button></div>
  </div>
</template>

<script>
export default {
  props: {
    customizedata: Object,
    filterkey: {
      type: String,
      default: ''
    },
    ftn: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    todoSearch () {
      this.$emit('getFilterBridge', {
        key: this.filterkey,
        label: this.customizedata.label,
        value: this.customizedata.value,
        ftn: this.ftn
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.o {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
