<template>
	<div>
		<h1>下拉表格，带复选框</h1>
		<select-table 
			:gridData="gridData" 
			@searchClick="searchClick" 
			@handleSelectionChange="handleSelectionChange"
		>
		</select-table>
	</div>
</template>

<script>
	import selectTable from '@/components/selectTable/index'
	export default {
		data() {
	    	return {
	    		gridData: [{
		          name: '王小虎',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎1',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎2',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎3',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎4',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎5',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎6',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎7',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '王小虎8',
		          value: '上海市普陀区金沙江路 1518 弄'
		        }]
	    	}
	    },
	    components: {
			selectTable
	    },
	    created() {
			
		},
	    methods: {
	    	searchClick(val) {
	    		console.log('searchClick=====>', val)
	    	},
	    	handleSelectionChange(val) {
	    		console.log('handleSelectionChange=======>', val)
	    	}
	    }
	}
</script>

<style>
	h1 {
		text-align: center;
		margin: 20px
	}
</style>