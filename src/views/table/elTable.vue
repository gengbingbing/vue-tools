<template>
  <div>
    <h1>{{ title }}</h1>
    <elGrid 
      :elGridOp='elGridOp'
      @handleSelectionChange='handleSelectionChange'
      @rowClick='rowClick'
      @cellClick='cellClick'
      @filtersData='filtersData'>
    </elGrid>
  </div>
</template>
<style>
  
</style>
<script>
import elGrid from '@/components/elGrid/index.vue'
export default {
    components: {
        elGrid
    },
    data(){
        return {
          title: 'elTable表格',
          elGridOp: {
            multipleTable: true,
            maxHeight: 600,
            border: true,
            size: 'mini',
            showHeader: true,
            resizable: true,
            colums: [{
              id: "name",
              prop:"name",
              label:"姓名",
              minWidth:"180",
              filterType: 'input'
            },
            {
              id: "date",
              prop:"date",
              label:"日期",
              minWidth:"180",
              filterType: 'date'
            },
            {
              id: "address",
              prop:"address",
              label:"地址",
              minWidth:"180",
              filterType: 'input'
            },
            {
              id: "sel",
              prop:"sel",
              label:"选项",
              minWidth:"180",
              filterType: 'select'
            }],
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              sel: '001'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              sel: '002'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              sel: '003'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              sel: '004'
            }]
          },
        }
    },
    methods: {
      handleSelectionChange(val) {

      },
      rowClick(val) {

      },
      cellClick(val) {

      },
      filtersData(val) {
        console.log('filtersData=========>', val)
      }
    },
}
</script>
