import { shuffleArray } from '../../assets/scripts/helpers'

const questions = {

    state: {
        queue: [],
        currentQuestion: {},
        answers: [],
        attempt: 3,
        lvl: 1,
        progressStep: 0,
        progress: 100
    },
    getters: {
        progress(state) {
            return state.progress;
        },
        currentQuestion(state) {
            return state.currentQuestion;
        },
        lvl(state) {
            return state.lvl;
        },
        answers(state) {
            return state.answers;
        },
        attempt(state) {
            return state.attempt;
        }
    },
    mutations: {
        reduceAttempt(state) {
            if (state.attempt > 0) {
                return state.attempt--;
            }
        },
        addLvl(state) {
            return state.lvl++;
        },
        nextQuestion(state) {
            return state.queue.length > 0 ? state.currentQuestion = state.queue.shift() : state.currentQuestion = {};
        },
        pushBackInQueue(state) {
            let tmpObj = {};
            Object.assign(tmpObj, state.currentQuestion)
            return state.queue.push(tmpObj);
        },
        reduceOrcHp(state) {
            // return state.progress > 0 ? state.progress -= state.progressStep : null;

            if (state.progress > 0) {
                if (state.progress <= state.progressStep) {
                    return state.progress = 0;
                }
                return state.progress -= state.progressStep;
            }
            return null;
        }
    },
    actions: {
        fetchQuestions({ state, rootGetters }) {
            const { $http } = rootGetters;

            $http.get('/data.json')
                .then(response => {
                    response.body.questions.forEach(function(question) {
                        shuffleArray(question.answers);
                    });
                    shuffleArray(response.body.questions);
                    state.progressStep = Math.ceil(100 / response.body.questions.length);
                    console.log(state.progressStep)
                    state.currentQuestion = response.body.questions.pop();
                    state.queue = response.body.questions;
                    state.answers = response.body.answers;
                }, error => {
                    console.error(error);
                })
        }
    }
}

export default questions