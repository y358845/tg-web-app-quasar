import axios from "axios";
const url_dev = "https://1c.rostgmu-uit.ru:4443/uit/hs/";
// const home = "http://localhost/science/hs/PersonalAPI/";
// const url_work =  `http://85.21.63.177/nauka/hs/PersonalAPI/`

export function uni_rersponse(payload, method) {
  const hh = `${url_dev}${method}`;
  return axios.post(`${url_dev}${method}`, payload, {
    credential: true,
    auth: {
      username: unescape(encodeURIComponent("service_usr")),
      password: unescape(encodeURIComponent("ssw0rds2023")),
    },

  });
}

export function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode("0x" + p1);
      }
    )
  );
}
