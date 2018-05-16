<template>
  <div class="cd-wrapper" v-show="true">
    <div class="cubeloading">
      <marquee direction=left class="jzz">link start</marquee>
      <img :src="require('@/assets/loading.gif')" alt="" class="ldgif">
    </div>
  </div>
</template>
/**@author gumiao
  * @description loading组件
  * @event 
  */
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    }
  };
</script>

<style scoped lang="stylus">
.cd-wrapper
  position fixed
  left 0
  top 0
  background rgba(0,0,0,0.5)
  width 100%
  height 100%
  z-index 999

.cubeloading
  width 300px
  height 300px
  position fixed
  left 50%
  top 50%
  margin-left -150px;
  margin-top -150px;
  z-index 9999
  background white
  border-radius 30px;/*no*/
  padding 30px
  .jzz
    margin-bottom 50px;
    text-align center
    font-size 40px;/*no*/
  .ldgif
    margin-left -80px
    margin-top -90px
</style>
