<template>
	<div>
		<tree-transfer :rightAllData='rightAllData' :leftAllData='leftAllData'></tree-transfer>
	</div>
</template>

<script>
	import treeTransfer from '@/components/treeTransfer/index'
	export default {
		data() {
	    	return {
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