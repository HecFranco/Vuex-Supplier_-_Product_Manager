import * as types from '../../types/global';

const state = {
  window_data: {
    window_width: window.innerWidth,
    window_height: window.innerHeight,
    scrollX_position: window.scrollX,
    scrollY_position: window.scrollY,
  },
};
const getters = {
  [types.WINDOW_DATA]: state => {
    return state.window_data;
  },
};
const mutations = {
  [types.WINDOW_DATA_CHANGE_SIZE]: (state) => {
    state.window_data.window_width = window.innerWidth;
    state.window_data.window_height = window.innerHeight;
  },
  [types.WINDOW_DATA_CHANGE_SCROLL]: (state) => {
    state.window_data.scrollX_position = window.scrollX;
    state.window_data.scrollY_position = window.scrollY;
  }, 
};
const actions = {
  [types.WINDOW_DATA_UPDATE_RESIZE]: ({ commit }) => {
    commit(types.WINDOW_DATA_CHANGE_SIZE);
  },
  [types.WINDOW_DATA_UPDATE_SCROLL]: ({ commit }) => {
    commit(types.WINDOW_DATA_CHANGE_SCROLL);
  },   
};

export default {
  state,
  mutations,
  actions,
  getters
}