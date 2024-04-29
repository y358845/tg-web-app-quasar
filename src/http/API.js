import {
  $authHost,
  $host
} from "./index";
import VueJwtDecode from "vue-jwt-decode";

export const login = async (email, password) => {
  const {
    data
  } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return VueJwtDecode.decode(data.token);
};

export const check = async () => {
  const {
    data
  } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return VueJwtDecode.decode(data.token);
};

export const getReq = async () => {

  const {
    res
  } = await $host.post("api/tg/getuserlistUIT", {})

  return res;
};
