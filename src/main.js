import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

/* Begin::Vue Axios ***********************************************************************/
// https://github.com/paweljw/bookstore-frontend/tree/master/src
// https://paweljw.github.io/2017/09/vue.js-front-end-app-part-3-authentication/
import VueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(VueAxios, axios)
/* End::Vue Axios *************************************************************************/
/* Begin::vue-router **********************************************************************/
import router from './router/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/* End::vue-router ************************************************************************/
//modules and types
// Todo
//.modules and types

new Vue({
  el: '#app',
  store,
  router,  
  render: h => h(App)
})
