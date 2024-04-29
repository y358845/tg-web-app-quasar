import axios from "axios";
const url_dev = "https://1c.rostgmu-uit.ru:4443/uit/hs/";
// const home = "http://localhost/science/hs/PersonalAPI/";
// const url_work =  `http://85.21.63.177/nauka/hs/PersonalAPI/`

export function post_request(payload, method) {

  return axios.post(`${url_dev}${method}`, payload, {
    credential: true,


  });
}
