<template lang='pug'>
  #app
    .content
      .header
        //- :heartAnimationStatus='heartAnimationStatus'
        app-header(
          :hearts='attempt'
          :playerLvl='lvl'
          :animationDuration='ANMATION_DURATION'
        )
      .main-section
        
        app-hero(
          :question='currentQuestion.questions_title'
        )
        app-firebool(
          :successAnimationStatus='firebollSuccessAbimation'
          :failureAnimationStatus='firebollfailureAnimation'
        )
        app-ork(
          :percent='progress'
          :animationDuration='ANMATION_DURATION'
        )
        .treasure
    .footer
      .end-game-block(
          v-show='isGameOver'
        )
        .end-game-message(
          :class='{show: isGameOver}'
        ) {{endGameMsg}}
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

export default {
  name: 'app',
  data () {
    return {
      firebollSuccessAbimation: false,
      firebollfailureAnimation: false,
      ANMATION_DURATION: 1000,
      isGameOver: false,
      endGameMsg: "",
      OrkTalk: ""
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
      this.successAnimation();
      setTimeout(()=>{
        this.addLvl();
        this.nextQuestion();
        this.reduceOrcHp();
        this.checkEndGame();
      }, this.ANMATION_DURATION) 
    },
    wrongAnswer(){
      console.log('не правильно')
      this.failureAnimation();
      setTimeout(()=>{
        this.reduceAttempt();
        this.pushBackInQueue();
        this.nextQuestion();
        this.checkEndGame();
      }, this.ANMATION_DURATION)
    },
    checkEndGame(){
      if (this.progress === 0){
        console.log('Игра закончена!');
        this.isGameOver = true;
        this.endGameMsg = 'Это было не легко, но вы победили!'
      }
      if (this.attempt === 0){
        this.isGameOver = true;
        this.endGameMsg = 'Вы проиграли! Возможно, если вы будете усерднее заниматься, то у вас получится одолеть JavaSript монстра! А, может быть, и нет...' 
      }
    },
    successAnimation(){
      this.firebollSuccessAbimation = true;
      setTimeout(()=>{
        this.firebollSuccessAbimation = false;
      }, this.ANMATION_DURATION)
    },
    failureAnimation(){
      this.firebollfailureAnimation = true;
      setTimeout(()=>{
        this.firebollfailureAnimation = false;
      }, this.ANMATION_DURATION)
    },
    showOrkTalk(){
      this.OrkTalk
    }
  },
  created(){
    this.fetchQuestions();
  }
}
</script>

<style lang="scss" scoped src='./styles/app.scss'>
</style>
