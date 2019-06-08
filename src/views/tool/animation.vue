<template>
  <div class="iCountUp">
    <ICountUp
      :startVal="startVal"
      :endVal="endVal"
      :decimals="decimals"
      :duration="duration"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>
 
<script>
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'demo',
    components: {
      ICountUp
    },
    data() {
      return {
        startVal: 0,
        endVal: 120500,
        decimals: 0,
        duration: 2.5,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      };
    },
    methods: {
      onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal + 100);
      }
    }
  };
</script>
 
<style>
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
</style>