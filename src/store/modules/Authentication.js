import * as types from '../../types/authentication';

const state = {
  user: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
  },
  logged: !!window.localStorage.getItem('_token'),
};
const getters = {
  [types.USER]: state => {
    return state.user;
  }, 
};
const mutations = {
  // to establish the user's status
  [types.MUTATE_USER_FIRSTNAME]: (state, firstname) => {
    state.user.firstname = firstname;
  },
  [types.MUTATE_USER_LASTNAME]: (state, lastname) => {
    state.user.lastname = lastname;
  },
  [types.MUTATE_USER_EMAIL]: (state, email) => {
    state.user.email = email;
  },
  [types.MUTATE_USER_PASSWORD]: (state, password) => {
    state.user.password = password;
  }
};
const actions = {

};

export default {
  state,
  mutations,
  actions,
  getters
}