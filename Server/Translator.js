const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors());

const URL = "https://api.mymemory.translated.net/get";
app.post("/translate", (req, res) => {
  axios
    .get(URL, {
      params: {
        q: req.body.originalText,
        langpair: `${req.body.fromLang}|${req.body.toLang}`,
      },
    })
    .then((response) => {
      console.log(response);
      res.json(response.data.responseData.translatedText)
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen("3008", () => {
  console.log("server is running");
});
