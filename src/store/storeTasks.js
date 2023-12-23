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
        commit(payload.nameState, res.data)
        console.log(res.data);
        return res.data
      });
    } catch (error) {
      console.log(error);
      return error.request.status;
    } finally {
      Loading.hide();
    }
  },
  // async getListUsers({
  //   commit
  // }) {
  //   Loading.show({
  //     message: 'Подождите идет загрузка данных...'
  //   })
  //   try {
  //     const res = await axios.post(`https://1c.rostgmu-uit.ru:4443/uit/hs/allworkers/allworkers`, {
  //       credential: true,
  //       auth: {
  //         username: unescape(encodeURIComponent('service_usr')),
  //         password: unescape(encodeURIComponent('P@ssw0rds2023'))
  //       }
  //     })
  //     commit('setStringOptions', res.data)
  //     console.log(res.data);
  //   } catch (e) {} finally {
  //     Loading.hide()
  //   }
  // },






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
