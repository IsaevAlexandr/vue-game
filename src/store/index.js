import Vue from 'vue'
import Vuex from 'vuex'
import VueResourse from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResourse);

import questions from './modules/questions';

export const store = new Vuex.Store({
    getters: {
        $http: () => (VueResourse)
    },
    modules: {
        questions
    }
})