<template>
  <header class="mui-bar mui-bar-nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-show="back"></a>
    <h1 class="mui-title">首页</h1>
  </header>
</template>
/**@author gumiao
  * @description 移动端顶部
  * @event 
  */
<script>
  export default {
    name: '',
    data() {
      return {
      }
    },
    props:{
      back: Boolean,

    },
    components: {
    },
    methods: {

    },
    mounted(){
      // console.log(this.$props.back)
    }
  }
</script>
<style lang="stylus" scoped>
.mui-bar
  height 88px;

.mui-title
  line-height 88px;
  font-size 34px;

</style>