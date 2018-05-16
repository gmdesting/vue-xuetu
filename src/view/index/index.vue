<template>
  <div>
    <headertop :back="false"></headertop>
    <div class="mui-content">
      
    </div>
  </div>
</template>

<script>
  import headertop from '@pc/header'
  import { mapActions } from "vuex";
  export default {
    data(){
      return{

      }
    },
    components:{
      headertop,
    },
    methods:{
      ...mapActions({
        getuser:'SAVE_GETUSER',
        getdemo:'SAVE_DEMO'
      })
    },
    mounted(){
      // this.getuser()
      this.getdemo('userinfo')
      console.log(this.$store.state)
    },
    activated(){
      
    }
  }
</script>

<style lang="stylus" scoped>
@import '~@cs/supreme'
</style>

<style lang="stylus">

</style>
