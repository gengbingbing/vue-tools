<template>
  <div class="menu-btn-config" v-if="ref">
    <ul class="menu-btn-Ul">
      <li v-for="(item, index) in data" :key="index">
        <div class="childBtn">
          <a-checkbox v-model="item.checked" @change="onChange(item)">{{item.menuName }}</a-checkbox>
        </div>
        <menu-btn-config
          v-if="item.menuType==='0'"
          class="btn-config-child"
          :class="{'btn-config-small':item.index=='1'}"
          :data="item.listDiffPermissionViewVO"
        ></menu-btn-config>

        <div v-else class="childBtnClass" :class="{'childIsBtn':item.menuType==='0'}">
          <span
            class="btnClass"
            v-for="(list,indexs) in item.listDiffPermissionViewVO"
            :key="indexs"
          >
            <a-checkbox v-model="list.checked" @change="onChange(list)">{{list.menuName }}</a-checkbox>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
var self = {};
export default {
  name: "menuBtnConfig",
  props: {
    data: Array,
    mockData: Array
  },
  data() {
    return {
      menuconfig: true,
      ref: true,
      curreentItem: ""
    };
  },
  mounted() {
    self = this;
  },
  methods: {
    onChange(item) {
      var _this = this;
      if (item.menuId === "0") {
        _this.data.forEach(element => {
          element.checked = item.checked;
          _this.checkedChildrenByCurrent(element);
        });
      } else {
        //递归处理子节点
        _this.checkedChildrenByCurrent(item);
        //递归处理父节点
        _this.checkedParentByCurrent(item);
      }
    },
    checkedChildrenByCurrent(item) {
      var _this = this;
      if (item.listDiffPermissionViewVO) {
        item.listDiffPermissionViewVO.forEach(element => {
          element.checked = item.checked;
          if (element.listDiffPermissionViewVO) {
            _this.checkedChildrenByCurrent(element);
          }
        });
      }
    },
    checkedParentByCurrent(item) {
      let curreentItem = "";
      let findItem = function(dataObj) {
        for (let element of dataObj) {
          if (element.menuId === item.menuId) {
            curreentItem = element;
            break;
          } else {
            if (
              element.listDiffPermissionViewVO &&
              element.listDiffPermissionViewVO.length > 0
            ) {
              findItem(element.listDiffPermissionViewVO, item);
            }
          }
        }
      };
      findItem(self.data);
      if (!item.checked) {
        //当前节点未选中父就取消选中
        curreentItem && self.unCheckedItem(curreentItem.parentId);
      } else {
        //当前节点选中状态
        curreentItem && self.isCheckedParentItem(curreentItem.parentId);
      }
    },
    unCheckedItem(itemId) {
      var unCheckParent = function(dataObj) {
        for (let element of dataObj) {
          if (element.menuId === itemId) {
            element.checked = false;
            if (element.menuId !== "0") {
              self.unCheckedItem(element.parentId);
            }
          } else {
            if (
              element.listDiffPermissionViewVO &&
              element.listDiffPermissionViewVO.length > 0
            ) {
              if (element.menuId !== "0") {
                unCheckParent(element.listDiffPermissionViewVO);
              }
            }
          }
        }
      };
      unCheckParent(self.data);
    },
    isCheckedParentItem(itemId) {
      if (itemId == "0") {
        self.isCheckAll();
        return;
      }
      var isCheckParent = function(dataObj) {
        for (let element of dataObj) {
          let children = element.listDiffPermissionViewVO;
          if (element.menuId == itemId) {
            let isChecked = true;
            for (let childItem of children) {
              if (!childItem.checked) {
                isChecked = false;
              }
            }
            element.checked = isChecked;
            if (isChecked) {
              self.isCheckedParentItem(element.parentId);
            }
            break;
          } else {
            if (children && children.length > 0) {
              isCheckParent(children);
            }
          }
        }
      };

      isCheckParent(self.data);
    },
    //判断
    isCheckAll() {
      let isChecked = true;
      for (let element of self.data) {
        if (element.parentId == "0" && !element.checked) {
          isChecked = false;
          break;
        }
      }
      self.data[0].checked = isChecked;
    }
  }
};
</script>
 
 <style lang="scss">
.menu-btn-config {
  .ant-checkbox-wrapper {
    margin: 12px;
    cursor: pointer;
  }
  .btn-config-child {
    display: inline-block;
    width: calc(100% - 200px);
    border-left: 1px solid gainsboro;
    .menu-btn-Ul {
      border-bottom: none;
    }
  }
  .childBtn {
    width: 200px;
    vertical-align: top;
    display: inline-block;
  }
  .childBtnClass {
    width: calc(100% - 200px);
    display: inline-block;
    border-left: 1px solid gainsboro;
    min-height: 42px;
    vertical-align: top;
  }
  .btn-config-small ul li {
    display: block;
  }
  .btn-config-small ul li:last-child {
    border-bottom: none;
  }
  .menu-btn-Ul {
    border: 1px solid gainsboro;
    border-bottom: none;
    li {
      border-bottom: 1px solid gainsboro;
      min-height: 42px;
    }
  }
  .menu-btn-Ul ul {
    border: none;
  }
  .btn-config-small {
    .menu-btn-Ul {
      border: none;
    }
  }
}
</style>