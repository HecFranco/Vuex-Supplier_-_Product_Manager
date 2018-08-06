import Vue from 'vue';
import Vuex from 'vuex';
import generalViewData from './modules/generalViewData';
import settings from './modules/settings';


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
      generalViewData,
      settings
    }
});