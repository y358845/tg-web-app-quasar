import axios from 'axios';
import { LocalStorage, Loading } from 'quasar'
import { uni_rersponse } from "src/functions/1с_response";
const state = {
  loggedIn: false, // стейт статуса авторизации пользователя
  userObject: '', //обьект сотрудник полученный после авторизации от api
  userLogin: '', // объект содеращий поля формы авторазиции
  isUsersLoading: false, //стейт для спиннера
  avatarImage: ''

}
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUserObject(state, userObject) {
    state.userObject = userObject
  },
  setUserLogin(state, userLogin) {
    state.userLogin = userLogin
  },
  setLoading(state, bool) {
    state.isUsersLoading = bool
  },
  setUsers(state, users) {
    state.users = users;
  },
  setAvatarImages(state, avatarImage) {
    state.avatarImage = avatarImage;
  },

}
const actions = {
  setAvatarImages({commit}, avatarImage) {
    commit('setAvatarImages', avatarImage);

  },
  async postQuery({ commit }, payload) {
    Loading.show();
    try {
      await uni_rersponse(payload, payload.nameMethod).then((res) => {
        commit(payload.nameState, res.data);
         commit("setUserLogin", payload);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
      return error.request.status;
    } finally {
      Loading.hide();
    }
  },
  async loginUser({commit}, payload) {
    // Loading.show()
    try {
      commit('setLoading', true);
      const res = await axios.get(`https://1c.rostgmu-uit.ru:4443/uit/hs/auth/auth/user?user=${payload.login.number}&pass=${payload.password}`, {
        credential: true,
        auth: {
          username: unescape(encodeURIComponent('358845')),
          password: unescape(encodeURIComponent('358845'))
        }
      })
      commit('setUserObject', res.data)
      commit('setUserLogin', payload)
      console.log(res.data);
      return res.data
    } catch (e) {
      return 'error'
    } finally {
      commit('setLoading', false);
    }
  },

  async addSetting({commit},newSetting) {
    try {
     await axios.post(`https://1c.rostgmu-uit.ru:4443/uit/hs/setting/setting/`,newSetting, {
            credential: true,
              auth: {
                  username: unescape(encodeURIComponent('358845')),
                  password: unescape(encodeURIComponent('358845'))
              }
        }).then((res) => {
          commit('setUserObject', res.data)
      })
    } catch (e) {}
  },

  //экшн для изменения стейта loggedIn при авторизации
  handleAuthStateChange({commit}, value) {
    // Loading.hide()
    commit('setLoggedIn', value)
    //если авторизованы то переходим по роуту-/
    if (value) {
      this.$router.push('/')
      LocalStorage.set('loggedIn', true)
      this.$router.push('/')
    } else {
      commit('setLoggedIn', false)
      LocalStorage.set('loggedIn', false)
      this.$router.replace('/auth')
    }
  },

}

const getters = {
  userObject: (state) => {
    return state.userObject;
  },
  userLogin: (state) => {
    return state.userLogin;
  },
  isUsersLoading: (state) => {
    return state.isUsersLoading
  },
  loggedIn: (state) => {
    return state.loggedIn
  },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
