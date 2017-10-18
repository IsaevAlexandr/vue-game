<template lang='pug'>
  #app
    //- pre {{currentQuestion}}
    .content
      .header
        app-header(
          :hearts='attempt'
          :playerLvl='lvl'
        )
      .main-section
        app-firebool
        app-hero(
          :question='currentQuestion.questions_title'
        )
        app-ork(
          :percent='progress'
        )
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
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      
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
  }
}
</script>

<style lang="scss" scoped src='./styles/app.scss'>
</style>
