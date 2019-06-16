<template>
	<div>
		<tree-transfer :op='op'></tree-transfer>
	</div>
</template>

<script>
	import treeTransfer from '@/components/treeTransfer/index'
	export default {
		data() {
	    	return {
	    		op: {
	    			checkOnClickNode: true,
		    		rightAllData: [],
		    		leftAllData: [{
	                    id: 1,
	                    label: '一级 1'
	                }, 
	                {
	                    id: 2,
	                    label: '一级 2'
	                }, 
	                {
	                    id: 3,
	                    label: '一级 3'
	                }]
	    		}
	    	}
	    },
	    components: {
			treeTransfer
	    },
	    created() {
			
		},
	    methods: {

	    }
	}
</script>