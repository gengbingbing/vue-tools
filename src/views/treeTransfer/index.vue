<template>
	<div>
		<h1>树形穿越框</h1>
		<div style="width: 60%; margin-left: 20%;">
			<tree-transfer 
				:title="title" 
				:from_data='fromData' 
				:to_data='toData' 
				:defaultProps="{label:'label'}"            
				@addBtn='add' 
				@removeBtn='remove' 
				:mode='mode'
				height='540px' 
				filter 
				openAll>
			</tree-transfer>
		</div>

		<div style="padding: 20px">
			<h1>使用方法：</h1>
			<p class="codeInfo">
				npm install el-tree-transfer --save
			</p>
			<h1>参数说明：</h1>
			<ol>
				<li>参数：width 说明：宽度 类型：String 必填：false 默认：100% 补充：建议在外部盒子设定宽度和位置</li>
				<li>参数：height 说明：高度 类型：String 必填：false 默认：320px</li>
				<li>参数：title 说明：标题 类型：Array 必填：false 默认：["源列表", "目标列表"]</li>
				<li>参数：button_text 说明：按钮名字 类型：Array 必填：false 默认：空</li>
				<li>参数：from_data 说明：源数据 类型：Array 必填：true 补充：数据格式同 element-ui tree 组件，但必须有 id 和 pid</li>
				<li>参数：to_data 说明：目标数据 类型：Array 必填：true 补充：数据格式同 element-ui tree 组件，但必须有 id 和 pid</li>
				<li>参数：defaultProps 说明：配置项 - 同 el-tree 中 props 必填： false 补充：用法和 el-tree 的 props 一样</li>
				<li>参数：node_key 说明：自定义 node-key 的值，默认为id 必填：false 补充：必须与 treedata 数据内的 id 参数名一致，必须唯一</li>
				<li>参数：pid 说明：自定义 pid 的参数名，默认为 </li>"pid" 必填：false 补充：有网友提出后台给的字段名不叫 pid，因此增加自定义支持</li>
				<li>参数：leafOnly 说明：是否只返回叶子节点 类型：Boolean 必填：false 补充：默认 false，如果你只需要返回的末端子节点可使用此参数</li>
				<li>参数：filter 说明：是否开启筛选功能 类型：Boolean 必填：false</li>
				<li>参数：openAll 说明：是否默认展开全部 类型：Boolean 必填：false</li>
				<li>参数：renderContent 说明：自定义树节点 类型：Function 必填：false 补充：用法同 element-ui tree</li>
				<li>参数：mode 说明：设置模式，字段可选值为 transfer|addressList 类型：String 必填：false 补充：mode 默认为 transfer 模式，即树形穿梭框模式，可配置字段为 addressList 改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在 title 数组传入四个值即可，addressList 模式时标题默认为通讯录、收件人、抄送人、密送人</li>
				<li>参数：transferOpenNode 说明：穿梭后是否展开穿梭的节点 类型：Boolean 必填：false 补充：默认为 true 即展开穿梭的节点，便于视觉查看，增加此参数是因为数据量大时展开会有明显卡顿问题，但注意，如此参数设置为 false 则穿梭后不展开，毕竟无法确定第几层就会有庞大数据</li>
				<li>参数：defaultCheckedKeys 说明：默认展开节点 类型：Array 必填：false 补充：只匹配初始时默认节点，不会在你操作后动态改变默认节点</li>
				<li>参数：placeholder 说明：设置搜索框提示语 类型：String 必填：false 补充：默认为请输入关键词进行筛选</li>
				<li>参数：defaultTransfer 说明：是否自动穿梭一次默认选中 defaultCheckedKeys 的节点 类型：Boolean 必填：false 补充：默认 false，用来满足用户不想将数据拆分成 fromData 和 toData 的需求事件：addBtn 说明：点击添加按钮时触发的事件 回调</li>
				<li>参数：function (fromData,toData,obj), 树形穿梭框 transfer 模式分别为
					<br> 1. 移动后左侧数据，
					<br>2. 移动后右侧数据，
					<br>3. 移动的节点 keys、nodes、halfKeys、halfNodes 对象；通讯录 addressList 模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表事件：removeBtn 说明：点击移除按钮时触发的事件 回调
				</li>
				<li>参数：function (fromData,toData,obj), 树形穿梭框 transfer 模式分别为 
					<br>1. 移动后左侧数据，
					<br>2. 移动后右侧数据，
					<br>3. 移动的节点 keys、nodes、halfKeys、halfNodes 对象；通讯录 addressList 模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
				</li>
			</ol>
		</div>
	</div>
</template>
<script>
  import treeTransfer from 'el-tree-transfer'
  export default {
  	components:{
  		treeTransfer
  	},
    data(){      
	    return {
	    	title: ['待选列', '已选列'],
	    	mode: "transfer",  // transfer addressList        
	    	fromData:[{            
	    		id: "1",            
	    		pid: 0,            
	    		label: "一级 1",            
	    		children: [{
	    			id: "1-1",                
	    			pid: "1",                
	    			label: "二级 1-1",                
	    			children: []              
	    		},
	    		{
	    			id: "1-2",
	    			pid: "1",
	    			label: "二级 1-2",                
	    			children: [{                    
	    				id: "1-2-1",
	    				pid: "1-2",
	    				children: [],
	    				label: "二级 1-2-1"
					},
					{
						id: "1-2-2",
	    				pid: "1-2",
	    				children: [],                    
	    				label: "二级 1-2-2"                  
	    			}]              
	    		}]          
	    	}],        
	    	toData:[]      
	    }    
	},   
	methods:{      
		// 切换模式 现有树形穿梭框模式 transfer 和通讯录模式 addressList      
		changeMode() {       
			if (this.mode == "transfer") {          
				this.mode = "addressList";        
			} else {          
				this.mode = "transfer";        
			}      
		},      
		// 监听穿梭框组件添加      
		add(fromData,toData,obj){       
			// 树形穿梭框模式 transfer 时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的        {keys,nodes,halfKeys,halfNodes} 对象        // 通讯录模式 addressList 时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表        
			console.log("fromData:", fromData);        
			console.log("toData:", toData);        
			console.log("obj:", obj);      
		},      
		// 监听穿梭框组件移除      
		remove(fromData,toData,obj){        
			// 树形穿梭框模式 transfer 时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的 {keys,nodes,halfKeys,halfNodes} 对象        
			// 通讯录模式 addressList 时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
			console.log("fromData:", fromData);        
			console.log("toData:", toData);        
			console.log("obj:", obj);      
		}    
	}
}
</script>
<style>
.codeInfo {
    padding: 10px 5px;
    background: #000;
    border-radius: 5px;
    color: #FFF;
}
ol {
    padding-left: 20px;
}
</style>
