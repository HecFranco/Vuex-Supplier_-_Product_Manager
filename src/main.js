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
//modules and types
// Todo
//.modules and types

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
