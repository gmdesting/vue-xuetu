<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <loading v-show="fetchloading"></loading>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import loading from '@pc/loading'
export default {
  data(){
    return{
      
    }
  },
  computed:{
    fetchloading(){
      return this.$store.state.fetchloading
    }
  },
  components:{
    loading
  },
  methods:{
    ...mapMutations({
      setwindowinfo:'SET_WINDOW_INFO'
    })
  },
  mounted(){
    this.setwindowinfo({
      // 这个64是小程序顶部高度
      // 获取浏览器高度
      windowHeight: window.screen.height - 32,
      windowWidth: window.screen.width
    })
  }
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>