<template>
	<div class="tableChoice">
		<el-dialog title="搜索表格" :visible.sync="tableChoiceObj.visible">
			<div>
				<span class="title">搜索</span>
			</div>
			<div class="searshInput">
				<el-input size="small" placeholder="请输入内容" v-model="searshInput">
					<i class="el-icon-search icon" slot="suffix" @click="handleIconClick"></i>
  				</el-input>
			</div>
			<div>
				<el-table height="200" class="gridTable" :data="gridDataTop" ref="multipleTable"  @selection-change="handleSelectionChange" @row-click="rowClick" :border="true">
				    <el-table-column property="date" label="日期" width="150"></el-table-column>
				    <el-table-column property="name" label="姓名" width="200"></el-table-column>
				    <el-table-column property="address" label="地址"></el-table-column>
					<el-table-column type="selection" width="55"></el-table-column>
			  	</el-table>
			</div>
			<div>
				<span class="title">已选列</span>
			</div>
			<div>
				<el-table height="200" class="gridTable" :data="gridDataBottom" :border="true">
				    <el-table-column property="date" label="日期" width="150"></el-table-column>
				    <el-table-column property="name" label="姓名" width="200"></el-table-column>
				    <el-table-column property="address" label="地址"></el-table-column>
				    <el-table-column property="" label="操作" width="55">
				    	<template slot-scope="scope">
					        <i class="el-icon-circle-close" @click="handleDelete(scope.$index, scope.row)"></i>
					      </template>
				    </el-table-column>
			  	</el-table>
			</div>
			<div class="btn">
				<el-button  size="mini" type="primary" @click="submitClick">提交({{num}})</el-button>
				<el-button  size="mini" @click="cancleClick">取消</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'tableChoice',
		props: ['tableChoiceObj'],
		data() {
	    	return {
	    		searshInput: '',
	    		gridDataTop: [],
				gridDataBottom: [],
				selData: [],
				num: 0
	    	}
	    },
	    watch: {
	    	visible: function() {
	    		this.gridDataTop = []
	    		this.gridDataBottom = []
	    	}
	    },
	    created() {
			
		},
	    methods: {
	    	// 点击搜索按钮
	    	handleIconClick() {
	    		this.gridDataTop = [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }]
	    	},
	    	// 删除已选列
	    	handleDelete(index, row) {
	    		this.$refs.multipleTable.toggleRowSelection(row);
	    	},
	    	// 获取选中列
	    	handleSelectionChange(val) {
	    		this.selData = val
	    		this.gridDataBottom = val
	    		this.num = val.length
	    	},
	    	rowClick(row) {
	    		this.$refs.multipleTable.toggleRowSelection(row);
	    	},
	    	cancleClick() {
	    		this.tableChoiceObj.visible = false
	    	},
	    	submitClick() {
	    		this.tableChoiceObj.visible = false
	    		this.$emit('selData', this.gridDataBottom);
	    	}
	    }
	}
</script>
<style scoped>
	.searshInput {
		margin-bottom: 10px
	}
	.gridTable {
		height: 200px;
		margin-bottom: 20px;
	}
	.icon {
		font-size: 24px;
	    margin-top: 4px;
	    color: cornflowerblue;
	    font-weight: bold;
	}
	.title {
		font-size: 16px;
	    font-weight: bold;
	    color: slateblue;
	}
	.btn {
		text-align: center;
	}
</style>