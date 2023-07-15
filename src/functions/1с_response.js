import axios from "axios";
const url_dev = "https://1c.rostgmu-uit.ru:4443/help_desk/hs/";


export function uni_rersponse(payload, method, responseType = 'text') {

  return axios.post(`${url_dev}${method}`, payload, {
    credential: true,
    auth: {
      username: unescape(encodeURIComponent("Админ")),
      password: unescape(encodeURIComponent("1808")),
    },
    responseType: responseType,
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
