const axios = require("axios")
const API_URL = "https://some-random-api.ml/img/cat";
const options = {
  headers: {'User-Agent': 'Tech Elevator Random Cat API'}
};

;(async function main () {
  try {
    const response = await axios.get(API_URL,options);
    const json = {
      file: response.data.link
    }
    console.log(JSON.stringify(json));
  } catch(err){
    console.error(err);
  }
})()
