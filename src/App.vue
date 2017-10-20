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
          :isDialogShow='orkTalk'
          :msg='orkMsg'
        )
        .treasure
    .footer
      .end-game-block(
          v-show='isGameOver'
        )
        .end-game-message {{endGameMsg}}
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
            :processing='canClick'
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
      orkTalk: false,
      orkMsg: "Сдавайся!",
      /* prevet multiclick */
      canClick: true
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
      this.canClick = false;
      setTimeout(()=>{
        this.canClick = true;
      }, this.ANMATION_DURATION)
    },
    rightAnswer(){
      console.log('правильно')
      this.successAnimation();
      setTimeout(()=>{
        this.addLvl();
        this.nextQuestion();
        this.reduceOrcHp();
        this.showOrkTalk("Ай ай ай!");
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
        this.showOrkTalk();
        this.checkEndGame();
      }, this.ANMATION_DURATION)
    },
    checkEndGame(){
      /* Успех */
      if (this.progress === 0){
        console.log('Игра закончена!');
        this.isGameOver = true;
        this.endGameMsg = 'Это было не легко, но вы победили!'

        /* Оставить диалог орка */
        this.orkMsg = "Но я же был так хорош..."
        setTimeout(() => {
          this.orkTalk = true;
        }, this.ANMATION_DURATION * 2.1)
      }
      /* Неудача */
      if (this.attempt === 0){
        this.isGameOver = true;
        this.endGameMsg = 'Вы проиграли! Возможно, если вы будете усерднее заниматься, то у вас получится одолеть JavaSript монстра! А, может быть, и нет...' 
        
        /* Оставить диалог орка */
        this.orkMsg = "Ха ха, ты еще слишком неопытен, цыпленок!"
        setTimeout(() => {
          this.orkTalk = true;
        }, this.ANMATION_DURATION * 2.1)
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
    showOrkTalk(msg = "Сдавайся!"){
      this.orkMsg = msg;
      this.orkTalk = true;
      setTimeout(() => {
        this.orkTalk = false;
      }, this.ANMATION_DURATION * 2)
    }
  },
  created(){
    this.fetchQuestions();
  }
}
</script>

<style lang="scss" scoped src='./styles/app.scss'>
</style>
