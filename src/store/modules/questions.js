import shuffleArray from './shuffleArray'

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
                if (state.attempt === 1) {
                    console.log('Игра закончена')
                    return state.attempt--
                } else {
                    return state.attempt--;
                }
            }
        },
        addLvl(state) {
            return state.lvl++;
        },
        nextQuestion(state) {
            return state.queue.length > 0 ? state.currentQuestion = state.queue.shift() : null;
        },
        pushBackInQueue(state) {
            let tmpObj = {};
            Object.assign(tmpObj, state.currentQuestion)
            return state.queue.push(tmpObj);
        },
        updateProgress(state) {
            return state.progress -= state.progressStep;
        }
    },
    actions: {
        fetchQuestions({ state, rootGetters }) {
            const { $http } = rootGetters;

            $http.get('/src/components/data.json')
                .then(response => {
                    response.body.questions.forEach(function(question) {
                        shuffleArray(question.answers);
                    });
                    shuffleArray(response.body.questions);
                    state.progressStep = 100 / response.body.questions.length;
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