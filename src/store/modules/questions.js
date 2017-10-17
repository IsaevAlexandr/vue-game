import shuffleArray from './shuffleArray'

const questions = {

    state: {
        queue: [],
        currentQuestion: {},
        answers: [],
        attempt: 10,
        lvl: 1
    },
    getters: {
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
            return state.attempt--;
        },
        addLvl(state) {
            return state.lvl++;
        },
        nextQuestion(state) {
            return state.currentQuestion = state.queue.pop();
        }
    },
    actions: {
        fetchQuestions({ state, rootGetters }) {
            const { $http } = rootGetters;

            $http.get('/src/components/data.json')
                .then(response => {
                    response.body.questions.forEach(function(question) {
                        shuffleArray(question.answers);
                    }, this);
                    shuffleArray(response.body.questions);
                    state.queue = response.body.questions;
                    state.currentQuestion = response.body.questions.pop();
                    state.answers = response.body.answers;
                }, error => {
                    console.error(error);
                })
        }
    }
}

export default questions