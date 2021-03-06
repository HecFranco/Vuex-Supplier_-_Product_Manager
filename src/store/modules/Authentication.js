import * as types from '../../types/authentication';

const state = {
  user: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
  },
  logged: !!window.localStorage.getItem('_token'),
  auth_type: ''
};
const getters = {
  [types.USER]: state => {
    return state.user;
  }, 
  [types.LOGGED]: state => {
    return state.logged;
  }, 
  [types.TYPE_AUTHENTICATION]: state => {
    return state.auth_type;
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
  },
  [types.MUTATE_LOGGED]: (state) => {
    state.logged = !state.logged;
  },
  [types.MUTATE_TYPE_AUTHENTICATION]: (state, payload) => {
    state.auth_type = payload;
  },
};
const actions = {
  [types.UPDATE_USER_FIRSTNAME]: ({commit}, payload) => {
    commit(types.MUTATE_USER_FIRSTNAME, payload);
  },
  [types.UPDATE_USER_LASTNAME]: ({commit}, payload) => {
    commit(types.MUTATE_USER_LASTNAME, payload);
  },
  [types.UPDATE_USER_EMAIL]: ({commit}, payload) => {
    commit(types.MUTATE_USER_EMAIL, payload);
  },
  [types.UPDATE_USER_PASSWORD]: ({commit}, payload) => {
    commit(types.MUTATE_USER_PASSWORD, payload);
  },
  [types.UPDATE_LOGGED]: ({commit}, payload) => {
    commit(types.MUTATE_LOGGED, payload);
  },        
  [types.UPDATE_TYPE_AUTHENTICATION]: ({commit}, payload) => {
    commit(types.MUTATE_TYPE_AUTHENTICATION, payload)
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}