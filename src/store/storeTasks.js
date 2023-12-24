import axios from 'axios';
import {
  QSpinnerGears,
  Loading
} from 'quasar'
import {
  uni_rersponse2
} from "src/functions/1с_response";

const state = {
  userList: [], //список сотрудников
  test: ''
}
const mutations = {

  setUserList(state, userList) {
    state.userList = userList;
  },
  setTest(state, test) {
    state.test = test;
  },
}

const actions = {

  async postQuery({
    commit
  }, payload) {
    Loading.show({
      spinner: QSpinnerGears,
      backgroundColor: "bg",
      message: "Подождите идет загрузка данных...",
    })
    try {
      await uni_rersponse2(payload, payload.nameMethod).then((res) => {
        if (payload.nameState != "") {
          commit(payload.nameState, res.data)
        }

        console.log(res.data);
        return res.data
      });
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      Loading.hide();
    }
  },






}
const getters = {

  // userObject: (state) => {
  //   return state.userObject;
  // },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
