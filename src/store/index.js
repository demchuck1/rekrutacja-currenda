import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cities from './cities.json';

export default new Vuex.Store({
    state: {
        searchWord: '',
        searchResults: cities,
        sortType: 'ASC'
    },
    mutations: {
        updateSearchWord(state, value) {
            state.searchWord = value;
        },
        changeSortType(state, value) {
            state.sortType = value;
        }
    },
    actions: {},
    modules: {}
})