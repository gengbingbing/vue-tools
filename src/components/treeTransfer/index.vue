<template>
	<div class="treeTransfer">
        <div class="leftTree floatLeft">
            <span style="margin-left: 23px"><el-checkbox v-model="leftAllChecked"></el-checkbox>&nbsp;&nbsp;待选列</span>
            <el-input size="mini" placeholder="输入关键字进行过滤" v-model="filterTextLeft"> </el-input>
            <el-tree
                show-checkbox
                @check-change="handleLeftCheckChange"
                ref="leftTree"
                :filter-node-method="filterNode"
                :data="leftAllData"
                node-key="id"
                default-expand-all>
            </el-tree>
        </div>

        <div class="floatLeft m20 mt15">
            <el-button type="primary" size="mini" round class="mB10" @click="moveLeft"><i class="el-icon-arrow-right"></i></el-button>
            <br>
            <el-button type="primary" size="mini" round  @click="moveRight"><i class="el-icon-arrow-left"></i></el-button>
        </div>

        <div class="rightTree floatLeft">
            <span style="margin-left: 23px"><el-checkbox v-model="rightAllChecked"></el-checkbox>&nbsp;&nbsp;已选列</span>
            <el-input size="mini" placeholder="输入关键字进行过滤" v-model="filterTextRight"> </el-input>
            <el-tree
                show-checkbox
                @check-change="handleRightCheckChange"
                ref="rightTree"
                :filter-node-method="filterNode"
                :data="rightAllData"
                node-key="id"
                default-expand-all
                draggable
                :allow-drop="allowDrop"
                :allow-drag="allowDrag">
            </el-tree>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
	    	return {
                leftAllChecked: false,
                rightAllChecked: false,
                returnLeftcheckedState: [],
                returnRightcheckedState: [],
                filterTextLeft: '',
                filterTextRight: '',
                leftSelData: [],
                rightSelData: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        props: ['rightAllData', 'leftAllData'],
        watch: {
            filterTextLeft(val) {
                this.$refs.leftTree.filter(val);
            },
            filterTextRight(val) {
                this.$refs.rightTree.filter(val);
            },
            leftAllChecked(val) {
                let keys = []
                this.leftAllData.forEach((item, index) => {
                    keys.push(item.id)
                })
                if(val) {
                    this.$refs.leftTree.setCheckedKeys(keys);
                } else {
                    this.$refs.leftTree.setCheckedKeys([]);
                }
            },
            rightAllChecked(val) {
                let keys = []
                this.rightAllData.forEach((item, index) => {
                    keys.push(item.id)
                })
                if(val) {
                    this.$refs.rightTree.setCheckedKeys(keys);
                } else {
                    this.$refs.rightTree.setCheckedKeys([]);
                }            
            },
            returnLeftcheckedState(val) {
                if(val.length === 0) {
                    this.leftAllChecked = false
                }
            },
            returnRightcheckedState(val) {
                if(val.length === 0) {
                    this.rightAllChecked = false
                }
            }
        },
	    methods: {
            moveLeft() {
                let newData = []
                this.leftSelData.forEach((item, index) => {
                    if(this.rightAllData.indexOf(item) === -1) {
                        newData.push(item)
                    }
                })
                
                this.rightAllData = [...this.rightAllData, ...newData]
                this.returnRightcheckedState = this.$refs.rightTree.getCheckedKeys()

                if(this.leftAllData.length === 0) {
                    this.leftAllChecked = false
                }
            },
            moveRight() {
                let newData = []
                let keys = []
                this.rightAllData.forEach((item, index) => {
                    if(this.rightSelData.indexOf(item) === -1) {
                        newData.push(item)
                        keys.push(item.id)
                    }
                })
                
                this.rightAllData = newData
                this.$refs.leftTree.setCheckedKeys(keys);
                
                this.returnLeftcheckedState = this.$refs.leftTree.getCheckedKeys()

                if(this.rightAllData.length === 0) {
                    this.rightAllChecked = false
                }
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleLeftCheckChange(val) {
                this.leftSelData = this.$refs.leftTree.getCheckedNodes()
            },
            handleRightCheckChange(val) {
                this.rightSelData = this.$refs.rightTree.getCheckedNodes()
            },
            allowDrop(draggingNode, dropNode, type) {
                if (type === 'next') {
                    return true
                } else {
                    return false;
                }
            },
            allowDrag(draggingNode) {
                // return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            }
        }
	}
</script>

<style>
    .floatLeft {
        float: left;
    }
    .m20 {
        margin: 20px;
    }
    .mt15 {
        margin-top: 15%;
    }
    .mB10 {
        margin-bottom: 10px;
    }
    .leftTree {
        width: 280px;
        border: 1px solid #e6e6e6;
        height: 400px;
        border-radius: 10px;
        padding: 5px 2px;
    }
    .rightTree {
        width: 280px;
        border: 1px solid #e6e6e6;
        height: 400px;
        border-radius: 10px;
        padding: 5px 2px;
    }
    .treeTransfer .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 95%;
        padding: 5px;
    }
    .treeTransfer {
        margin-left: 20%;
    }
</style>
