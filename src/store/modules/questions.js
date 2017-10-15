const questions = {

    state: {
        data: [],
    },
    getters: {
        getQuestions(state) {
            return state.data;
        }
    },
    mutations: {

    },
    actions: {
        fetchQuestions({ state, rootGetters }) {
            const { $http } = rootGetters;

            $http.get('/src/components/data.json')
                .then(response => {
                    state.data = response.body;
                    // console.log(state.data.questions.question.answers[2]);
                }, error => {
                    console.error(error);
                })
        }
    }
}

export default questions