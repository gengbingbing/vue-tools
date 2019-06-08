<template>
  <div>
    <ul class="roll-ul" @mouseover="start()" @mouseout="end()">
      <li v-for="item in list" ref="rollul" style="padding-bottom:20px" :class="{anim:animate==true}">
          <span class="name">{{item.name}}</span><br>
          <span class="site">{{item.site}}</span><br>
          <span class="gsmc">{{item.gsmc}}</span><br>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:'',
        form: {
          number: '',
          name: '',
          industry: '',
          model: '国有企业',
          range: [],
          regDate: '',
        },
        animate:true,
        time:'',
        list:[
            {"name":"于先生1","site":"北京门头沟区1","gsmc":"柠檬树装饰1"},
            {"name":"于先生2","site":"北京门头沟区2","gsmc":"柠檬树装饰2"},
            {"name":"于先生3","site":"北京门头沟区3","gsmc":"柠檬树装饰3"},
            {"name":"于先生4","site":"北京门头沟区4","gsmc":"柠檬树装饰4"},
            {"name":"于先生5","site":"北京门头沟区5","gsmc":"柠檬树装饰5"},
            {"name":"于先生6","site":"北京门头沟区6","gsmc":"柠檬树装饰6"},
            {"name":"于先生7","site":"北京门头沟区7","gsmc":"柠檬树装饰7"},
            {"name":"于先生8","site":"北京门头沟区8","gsmc":"柠檬树装饰8"},
            {"name":"于先生9","site":"北京门头沟区9","gsmc":"柠檬树装饰9"},
            {"name":"于先生10","site":"北京门头沟区10","gsmc":"柠檬树装饰10"},
            {"name":"于先生11","site":"北京门头沟区11","gsmc":"柠檬树装饰11"}
        ]
      };
    },

    methods: {
      scroll(){
        let con1 = this.$refs.rollul;
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        that.list.push(that.list[0]);
        that.list.shift();
        that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        console.log("*9*");
      },
      end() {
        this.time = setInterval(this.scroll, 1000)
      },
      start() {
        clearInterval(this.time); 
      }
    },
    mounted: function (){ 
      this.time = setInterval(this.scroll, 1000)
    }
  }
</script>

<style>
  .newest-bill .nwwest-roll {
    padding-left: 15px;
    height: 210px;
    margin: 10px auto;
    overflow: hidden;
     transition: all 0.5s;
  }
  .newest-bill .nwwest-roll li{
    height: 35px;
    line-height: 35px;
  }

  .anim{
    transition: all 0.5s;
  }
</style>