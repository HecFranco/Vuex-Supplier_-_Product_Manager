import * as types from '../types';

const state = {
  user: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
  },
  logged
};
const getters = {
  [types.USER]: state => {
    return state.user;
  },
  [types.LOGGED]: state => {
    return state.logged;
  },  
};
const mutations = {
  //
};
const actions = {
  //
};

export default {
  state,
  mutations,
  actions,
  getters
}