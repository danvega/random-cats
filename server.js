const axios = require("axios");
const express = require('express');
const server = express();


const API_URL = "https://some-random-api.ml/img/cat";
const options = {
  headers: {'User-Agent': 'Tech Elevator Random Cat API'}
};

server.get("/", (req, res) => {
    axios.get(API_URL,options).then((response) => {
      res.json({file: response.data.link});
    })
    .catch((err) => console.error(err));

});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
