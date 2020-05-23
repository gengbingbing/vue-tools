<template>
    <div>
        <!-- 
            @save: 按下 ctrl + s 时触发
            @change: 当值发生改变时 触发
        -->
        <mavon-editor
          style="max-height: calc(100vh - 120px)"
          @save="saveDoc"
          @change="updateDoc"
          ref="editor"
          v-model="doc">
        </mavon-editor>

         <el-button style="margin-top: 20px; float: left; margin-left: calc(50% - 30px)" @click="saveDoc" type="primary" size="small">提交</el-button>
    </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    name: "Create",
    components: { mavonEditor },
    data() {
        return {
            doc: ""
        };
    },
    methods: {
        updateDoc(markdown, html) {
            // 此时会自动将 markdown 和 html 传递到这个方法中
            console.log("markdown内容: " + markdown);
            console.log("html内容:" + markdown);
        },
        saveDoc(markdown, html) {
            // 此时会自动将 markdown 和 html 传递到这个方法中
            console.log("markdown内容:" + markdown);
            console.log("html内容:" + html);
        }
    }
};
</script>