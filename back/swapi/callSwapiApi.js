const axios = require("axios");

const callSwapiApi = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("Error : " + err));
};

module.exports = {
  callSwapiApi,
};
