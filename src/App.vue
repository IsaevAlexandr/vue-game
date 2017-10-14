<template lang='pug'>
  #app
    app-content
    app-footer
</template>

<script>
import appContent from './components/content'
import appFooter from './components/footer'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appContent,
    appFooter
  }
}
</script>

<style lang="scss" scoped src='./styles/layout.scss'>
  
  // .wrapper {
  //   height: 100%;
  //   width: 100%;
  //   min-height: 650px;
  //   display: flex;
  //   flex-direction: column;
  // }
  // .content {
  //   flex: 1;
  //   background-image: url('~images/admin-bg.jpg');
  //   /* center no-repeat cover */
  //   @include image;
  // }
</style>
