<template>
  <el-table
    ref="multipleTable"
    :fit='true'
    :border='elGridOp.border'
    :size='elGridOp.size'
    :show-header='elGridOp.showHeader'
    :data="elGridOp.tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :max-height="elGridOp.maxHeight"
    @row-click="rowClick"
    @cell-click="cellClick"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="elGridOp.multipleTable"  type="selection" width="55">
    </el-table-column>
    <el-table-column
      :label="item.label"
      :min-width="elGridOp.minWidth"
      :resizable="elGridOp.resizable"
      :render-header="item.filterType === 'input' ? renderHeaderInput : item.filterType === 'date' ? renderHeaderDate : item.filterType === 'select' ? renderHeaderMunsel : renderHeaderNull"
      v-bind:key="item.prop"
      v-for="item in elGridOp.colums">
      <template slot-scope="scope">
        {{ scope.row[item.prop] }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:['elGridOp'],
    comments: {
      renderHeader() {
        return function(start) {
          if(start === 'input') {
            return 'renderHeaderInput'
          } else {
            return 'renderHeaderNull'
          }
        }
      }
    },
    data() {
      return {
        selData: [],
        inputVal: '',
        inputValDate: [],
        filterObj: {},
        selInput: '',
        props: { multiple: true, checkStrictly: true },
        options: [{
          value: 1,
          label: '东南'
        }, {
          value: 2,
          label: '西北'
        }, {
          value: 3,
          label: '西男'
        }, {
          value: 4,
          label: '中原'
        }]
      }
    },
    created() {
      
    },
    methods: {
      renderHeaderNull(h, { column, $index }) {
        return (<div>
                  <span>{ column.label }</span>
                </div>)
      },
      renderHeaderInput(h, { column, $index }) {
        let columId = column.id
        let display = `display: ${this.elGridOp.isSort}`
        return (<div>
                  <span>{ column.label }</span>
                  <el-popover 
                    placement="bottom" 
                    class="elPopover"
                    width="200" 
                    height="300"
                    trigger="click">
                    <i class="el-icon-arrow-down" slot="reference"  columKey={$index} columnlable={column.label} on-click={this.popoverClick}></i>
                    <i style={display} class="el-icon-sort" slot="reference"  columKey={$index} on-click={this.sortClick}></i>
                    <el-input
                      size="small"
                      placeholder="请输入"
                      v-model={this.inputVal}>
                    </el-input>
                    <div class="centerBtn">
                       <el-button size="mini" type="primary" on-click={this.filtersSaveBtn}>确定</el-button>
                       <el-button size="mini" on-click={this.filterCancelBtnk}>取消</el-button>
                    </div>
                  </el-popover>
                </div>)
      },
      renderHeaderDate(h, { column, $index }) {
        let display = `display: ${this.elGridOp.isSort}`
        return (<div>
                  <span>{ column.label }</span>
                  <el-popover 
                    placement="bottom" 
                    class="elPopover"
                    width="350" 
                    height="300"
                    trigger="click">
                    <i class="el-icon-arrow-down" slot="reference" columKey={$index} columnLable={column.label} on-click={this.popoverClick}></i>
                    <i style={display} class="el-icon-sort" slot="reference"  columKey={$index} on-click={this.sortClick}></i>
                    <el-date-picker
                      v-model={this.inputValDate}
                      type="daterange"
                      size="mini"
                      on-change={this.dateChange}
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                  </el-popover>
                </div>)
      },
      renderHeaderMunsel(h, { column, $index }) {
        let display = `display: ${this.elGridOp.isSort}`
        return (<div>
                  <span>{ column.label }</span>
                  <el-popover 
                    placement="bottom" 
                    class="elPopover"
                    on-change="selChange"
                    width="200" 
                    height="300"
                    trigger="click">
                    <i class="el-icon-arrow-down" slot="reference" columKey={$index} columnLable={column.label} on-click={this.popoverClick}></i>
                    <i style={display} class="el-icon-sort" slot="reference"  columKey={$index} on-click={this.sortClick}></i>
                    <el-cascader
                      options={this.options}
                      props={this.props}
                      collapse-tags
                      clearable
                      on-change="selChange">
                    </el-cascader>
                  </el-popover>
                </div>)
      },
      sortClick(e) {
        this.$emit('sortData', e.target.attributes[0].value)
      },
      popoverClick(e) {
        console.log(e)
        this.filterObj = {
          key: e.target.attributes[0].value,
          label: e.target.attributes[1].value
        }
      },
      selChange(val) {
        debugger
        this.filterObj.value = this.selInput
        this.$emit('filtersData',  this.filterObj)
        $('.el-popover').hide()
      },
      dateChange(val) {
        let startTime = this.getDate(this.inputValDate[0])
        let endTime = this.getDate(this.inputValDate[1])
        this.filterObj.value = {
          startTime: startTime,
          endTime: endTime
        }
        this.$emit('filtersData',  this.filterObj)
        $('.el-popover').hide()
      },
      getDate(time) {
        let date = new Date(time)
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let timeNew = `${year}-${month}-${day}`
        return timeNew
      },
      filtersSaveBtn() {
        this.filterObj.value = this.inputVal
        this.$emit('filtersData',  this.filterObj)
        this.inputVal = ''
        $('.el-popover').hide()
      },
      filterCancelBtnk() {
        this.inputVal = ''
        $('.el-popover').hide()
      },
      handleSelectionChange(val) {
        // 获取选中的数据
        this.selData = val
        this.$emit('handleSelectionChange', val)
      },
      rowClick(row, column, event) {
        let obj = {
          row: row, 
          column: column, 
          event: event
        }
        this.$emit('rowClick', obj)
      },
      cellClick(row, column, cell, event) {
         let obj = {
          row: row, 
          column: column, 
          cell: cell,
          event: event
        }
        this.$emit('cellClick', obj)
      },
    },
  }
</script>

<style>
  .centerBtn {
    text-align: end;
    margin-top: 10px;
  }
</style>
