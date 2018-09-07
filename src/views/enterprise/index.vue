<template>
  <div>
    <el-button type="primary" @click="export2Excel()">导出Excel</el-button>

    <el-button type="primary">
      <input id="upload" type="file" @change="importfxx(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    </el-button>
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
  import Export2Excel1 from '../../vendor/Export2Excel.js'
  export default {
    data() {
      return {
        dataList: [
          {id: '1', address: '12304', name: '东盟'},
          {id: '2', address: '12304', name: '欧盟'},
          {id: '3', address: '12304', name: '北约'},
          {id: '4', address: '12304', name: '美国'},
          {id: '5', address: '12304', name: '中国'},
          {id: '6', address: '12304', name: '印度'},
        ],
        formInline: {}
      }
    },
    methods: {
      export2Excel() {
        const { export_json_to_excel } = require('../../vendor/Export2Excel');
        const tHeader = ['序号', '代码', '姓名'];
        const filterVal = ['id', 'address', 'name'];
        const list = this.dataList;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '列表excel');
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      importfxx(obj) {
        let _this = this;
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.file = event.currentTarget.files[0];
        var rABS = false; //是否将文件读取为二进制字符串
        var f = this.file;
        var reader = new FileReader();
        //if (!FileReader.prototype.readAsBinaryString) {
        FileReader.prototype.readAsBinaryString = function(f) {
            var binary = "";
            var rABS = false; //是否将文件读取为二进制字符串
            var pt = this;
            var wb; //读取完成的数据
            var outdata;
            var reader = new FileReader();
            reader.onload = function(e) {
                var bytes = new Uint8Array(reader.result);
                var length = bytes.byteLength;
                for(var i = 0; i < length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                var XLSX = require('xlsx');
                if(rABS) {
                    wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
                        type: 'base64'
                    });
                } else {
                    wb = XLSX.read(binary, {
                        type: 'binary'
                    });
                }
                outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);//outdata就是你想要的东西
                this.da = [...outdata]
                let arr = []
                this.da.map(v => {
                  console.log("******");
                  console.log(v);
                    let obj = {}
                    obj.id = v.序号
                    obj.adress = v.代码
                    obj.name = v.姓名
                    arr.push(obj)
                })
                console.log(arr)
                let para = {
                    //withList: JSON.stringify(this.da)
                    withList: arr
                }
                _this.$message({
                    message: '请耐心等待导入成功',
                    type: 'success'
                });
                
            }
            reader.readAsArrayBuffer(f);
        }
        if(rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
    },
    }
  }
</script>