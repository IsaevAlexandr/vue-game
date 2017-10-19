<template lang='pug'>
  #app
    .content
      .header
        app-header(
          :hearts='attempt'
          :playerLvl='lvl'
          :heartAnimationStatus='heartAnimationStatus'
          :animationDuration='ANMATION_DURATION'
        )
      .main-section
        
        app-hero(
          :question='currentQuestion.questions_title'
        )
        app-firebool(
          :successAnimationStatus='firebollSuccess'
          :failureAnimationStatus='firebollfailure'
        )
        app-ork(
          :percent='progress'
          :animationDuration='ANMATION_DURATION'
        )
        .treasure
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
import {mapActions, mapGetters, mapMutations} from 'vuex';

import {smoothTextAppearance} from './assets/scripts/helpers.js';

export default {
  name: 'app',
  data () {
    return {
      heartAnimationStatus: false,
      firebollSuccess: false,
      firebollfailure: false,
      ANMATION_DURATION: 1000
    }
  },
  computed: {
    ...mapGetters(['progress','currentQuestion','answers','attempt','lvl']),
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
    ...mapMutations(['reduceAttempt','addLvl','nextQuestion','pushBackInQueue','reduceOrcHp']),
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
      this.reduceOrcHp();
      /* Плавное появление текста вопроса */
      this.smoothTextAppearance();
    },
    wrongAnswer(){
      console.log('не правильно')
      this.animateHearts();

      // Костыль с анимацией плавного изчезновения сердец
      setTimeout(()=>{
        this.heartAnimationStatus = false;
        this.reduceAttempt();
      }, this.ANMATION_DURATION)

      this.pushBackInQueue();
      this.nextQuestion();

      /* Плавное появление текста вопроса */
      this.smoothTextAppearance();      
    },
    animateHearts(){
      this.heartAnimationStatus = true;
    },
    /* Плавное появление текста вопроса */
    smoothTextAppearance(){
      let elem = document.querySelector('.question');
      smoothTextAppearance(elem);
    }
  },
  created(){
    this.fetchQuestions();
  }
}
</script>

<style lang="scss" scoped src='./styles/app.scss'>
</style>
