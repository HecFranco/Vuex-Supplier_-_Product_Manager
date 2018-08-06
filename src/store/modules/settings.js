import * as types from '../../types/global';
import axios from 'axios';

const state = {
  settings_data: {
    name_app: '',
    url_img_logo_vertical: '',
    url_img_logo_horizontal: '',
    dismiss_secs_alerts: '',
  },
};
const getters = {
  [types.SETTINGS_DATA]: state => {
    return state.settings_data;
  },
};
const mutations = {
  [types.SETTINGS_CHANGE_DATA]: (state, {apiResponse}) => {
    state.settings_data = apiResponse.result;
  },
};
const actions = {
  [types.SETTINGS_UPDATE_DATA]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get('http://127.0.0.1:8000/api/get_settings',
        {headers: { 'Content-Type': 'application/json' }}
      ).then(response => {
        // eslint-disable-next-line
        console.log(response);
        commit(types.SETTINGS_CHANGE_DATA, {apiResponse: response.data} );
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        // commit(globalTypes.mutations.stopProcessing);
      })
    })
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}