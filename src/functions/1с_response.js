import axios from "axios";
const url_dev = "https://1c.rostgmu-uit.ru:4443/help_desk/hs/";
const url_dev2 = "https://1c.rostgmu-uit.ru:4443/uit/hs/";


export function uni_rersponse(payload, method) {

  return axios.post(`${url_dev}${method}`, payload, {
    credential: true,
    auth: {
      username: unescape(encodeURIComponent("service_usr")),
      password: unescape(encodeURIComponent("P@ssw0rds2023")),
    },

  });
}
export function uni_rersponse2(payload, method) {

  return axios.post(`${url_dev2}${method}`, payload, {
    credential: true,
    auth: {
      username: unescape(encodeURIComponent("service_usr")),
      password: unescape(encodeURIComponent("P@ssw0rds2023")),
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
//метод добавления файлов где  нужно добавлять вложения
export function addFile(file, files) {
  const arrFiles = files;
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = function () {
    let file64 = reader.result;
    fetch(file64).then((res) => {
      res.arrayBuffer().then((buf) => {
        arrFiles.push({
          fileName: file[0].name,
          file: file64
        });
      });
    });
  };
},
