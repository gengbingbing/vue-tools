<template>
    <div>
        <el-button type="primary" @click="showDialog">打开弹出框</el-button>
        <table-choice :tableChoiceObj="tableChoiceObj" :visible="tableChoiceObj.visible" @selData="selData"></table-choice>

        <div>{{getSelData}}</div>
    </div>
</template>

<script>
import tableChoice from "@/components/tableChoice/index";
export default {
    components: { tableChoice },
    data() {
        return {
            tableChoiceObj: {
                visible: false
            },
            getSelData: ''
        }
    },
    methods: {
        showDialog() {
            this.tableChoiceObj.visible = true
        },
        selData(val) {
            this.getSelData = val
        }
    }
}
</script>

