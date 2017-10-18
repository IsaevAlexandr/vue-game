<template lang='pug'>
  #app
    //- pre {{currentQuestion}}
    .content
      app-header(
        :hearts='attempt'
        :playerLvl='lvl'
      )
      app-firebool
      app-hero(
        :question='currentQuestion.questions_title'
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
            v-for='(answer, index) in currentQuestion.answers'
            :number='index + 1'
            :text='answer'
            :key='index'
            @checkAnswer='chekAnsw'
          )
</template>

<script>
import appHeader from './components/header';
import appHero from './components/hero';
import appOrk from './components/ork';
import appFirebool from './components/fireboll';
import appQuestionItem from './components/question-item';

/* функция для перемешивания элементов массива */
import shuffleArray from './store/modules/shuffleArray.js'

import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['queue','currentQuestion','answers','attempt','lvl']),
  },
  components:{
    appHeader,
    appHero,
    appOrk,
    appFirebool,
    appQuestionItem
  },
  methods: {
    ...mapActions(['fetchQuestions']),
    ...mapMutations(['reduceAttempt','addLvl','nextQuestion','pushBackInQueue']),
    chekAnsw(text){
      let answer = this.answers.find(answer => 
        answer.id === this.currentQuestion.id
      )
      if (answer.is_correct === text){
        this.rightAnswer();
      }else{
        this.wrongAnswer();
      }
    
    },
    rightAnswer(){
      console.log('правильно')
      this.addLvl();
      this.nextQuestion();
    },
    wrongAnswer(){
      console.log('не правильно')
      this.reduceAttempt();
      this.pushBackInQueue();
      this.nextQuestion();
      
    }
  },
  created(){
    this.fetchQuestions();
    // console.log('очередь вопросов :', this.queue);
    // console.log('текущий вопрос',this.currentQuestion);
    // console.log(this.answers);
    // console.log(this.attempt);
    // console.log(this.lvl);
  },
  mounted(){
    // console.log('очередь вопросов :', this.queue);
    // console.log('текущий вопрос',this.currentQuestion);
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
