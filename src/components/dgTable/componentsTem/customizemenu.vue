<template>
  <div>
    <el-button @click.stop="click1" size="mini">click1</el-button>
    <el-button @click.stop="click2" size="mini" style="margin:0;margin-top:5px">click2</el-button>
  </div>
</template>
<script>
export default {
  props: ['row', 'handlers'],
  methods: {
    click1 () {
      this.handlers.firsth(this.row)
    },
    click2 () {
      this.handlers.second(this.row)
    }
  }
}
</script>

