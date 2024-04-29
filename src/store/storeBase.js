import {
  QSpinnerGears,
  Loading
} from "quasar";
import VueJwtDecode from "vue-jwt-decode";
import {
  $authHost,
  $host
} from "../http/index.js"
import {
  sendNotify
} from "../functions/standart_procedure.js";

import axios from "axios";
const state = {
  structuraList: [],
  portfolioList: [],
  portfolioListElenment: [],
  teamList: [],
  news: [],
  contacts: "",
  answer: "",
  loggedIn: false,
  userLogin: "",
  userList: [],
};
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setUserList(state, userList) {
    state.userList = userList;
  },
  setUserLogin(state, userLogin) {
    state.userLogin = userLogin;
  },
  setStructuraList(state, structuraList) {
    state.structuraList = structuraList;
  },
  setPortfolioList(state, portfolioList) {
    state.portfolioList = portfolioList;
  },
  setPortfolioListElement(state, portfolioListElenment) {
    state.portfolioListElenment = portfolioListElenment;
  },
  setTeamList(state, teamList) {
    state.teamList = teamList;
  },
  setNews(state, news) {
    state.news = news;
  },
  setContacts(state, contacts) {
    state.contacts = contacts;
  },
  setAnswer(state, answer) {
    state.answer = answer;
  },
};

const actions = {


  async saveData({

    commit
  }, payload) {
    Loading.show({
      spinner: QSpinnerGears,
      backgroundColor: "bg"
    })
    try {
      return await $authHost.post(payload.nameMethod, payload)

        .then((res) => {
          if (payload.nameState) {
            commit(payload.nameState, res.data)
          } else {
            sendNotify(res.data, 'positive', 'bottom-left')
          }
          return res.data;
        });
    } catch (e) {
      console.log(e);
    } finally {
      Loading.hide();
    }
  },


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



  async loginUser({
    commit
  }, payload) {

    Loading.show({
      spinner: QSpinnerGears,
      backgroundColor: "bg"
    })
    try {
      return await $host.
      post("api/user/login", payload).then(res => {
        commit("setLoggedIn", true);
        commit("setUserLogin", VueJwtDecode.decode(res.data.token));
        // console.log(VueJwtDecode.decode(res.data.token));
        // this.$router.push("/");
        localStorage.setItem("token", res.data.token);
        return VueJwtDecode.decode(res.data.token)
      })
    } catch (e) {
      sendNotify(e.response.data.message, 'negative', 'bottom-left')
    } finally {
      Loading.hide();
    }
  },


};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
