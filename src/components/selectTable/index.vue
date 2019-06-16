<template>
	<div class="selectTable">
		<el-popover
		    placement="bottom"
		    width="280"
		    trigger="click">
		    <el-table 
		    	ref="multipleTable" 
		    	tooltip-effect="dark"
		    	style="width: 100%"
		    	max-height='300'
		    	:data="gridData" 
		    	:fit="true"
		    	:show-header="false"
		    	@row-click="rowClick"
		    	@selection-change="handleSelectionChange" 
		    >
		    	<el-table-column type="selection" width="55"></el-table-column>
			    <el-table-column property="name" label="全选"></el-table-column>
			</el-table>
			<el-input
				width="280"
				clearable
				slot="reference"
			    size="medium"
			    placeholder="请输入内容"
			    suffix-icon="el-icon-arrow-down"
			    v-model="searchKey">
		  	</el-input>
		 </el-popover>
		 <el-button size="medium" type="primary" @click="searchClick">搜索</el-button>
	</div>
</template>

<script>
	export default {
		props: ['gridData'],
		data() {
	    	return {
	    		searchKey: ''
	    	}
	    },
	    watch: {
	    	searchKey: function(val) {
	    		if(val === '') {
    			 	this.$refs.multipleTable.clearSelection();
	    		}
	    	}
	    },
	    created() {
			
		},
	    methods: {
	    	rowClick(row) {
	    		this.$refs.multipleTable.toggleRowSelection(row);
	    	},
	    	handleSelectionChange(val) {
	    		let name = ''
	    		val.forEach((item, index) => {
	    			name = name + item.name + ','
	    		})
	    		this.searchKey = name

	    		// 抛出handleSelectionChange方法，获取选中的值value
	    		this.$emit('handleSelectionChange', val)
	    	},
	    	searchClick(e) {
	    		this.$emit('searchClick', this.searchKey)
	    	}
	    }
	}
</script>

<style>
	.selectTable .el-input {
	    position: relative;
	    font-size: 14px;
	    display: inline-block;
	    width: 292px;
	}
	.el-popover {
	    padding: 5px; 
	}
</style>