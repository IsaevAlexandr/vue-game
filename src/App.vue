<template lang='pug'>
  #app
    .content
      app-header
      app-firebool
      app-hero(
          :question='question'
      )
      app-ork
    .footer
      .left 
        .text 
            |твой 
            |ответ? 
        .sign >
      .answers
        ul.list
          app-question-item(
            v-for='(i, index) in 4'
            :number='i'
            :key='index'
          )
</template>

<script>
import appHeader from './components/header';
import appHero from './components/hero';
import appOrk from './components/ork';
import appFirebool from './components/fireboll';
import appQuestionItem from './components/question-item';

export default {
  name: 'app',
  data () {
    return {
      question: 'Каким методом нельзя сделать AJAX запрос в jQuery?'
    }
  },
  components:{
    // appContent,
    appHeader,
    appHero,
    appOrk,
    appFirebool,
    appQuestionItem
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
