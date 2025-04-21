import React, { useState } from "react";
import axios from "axios";
const Translator = () => {
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("en");
  const [originalText, setOriginalText] = useState("");
  console.log(fromLang, toLang, originalText);
  const [response, setResponse] = useState("");
  const languages = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Chinese (Simplified)", code: "zh" },
    { name: "Japanese", code: "ja" },
    { name: "Russian", code: "ru" },
    { name: "Arabic", code: "ar" },
    { name: "Portuguese", code: "pt" },
    { name: "Hindi", code: "hi" },
  ];
  const handleClick = () => {
    axios
      .post("http://localhost:3008/translate", {
        fromLang: fromLang,
        toLang: toLang,
        originalText: originalText,
      })
      .then((response) => {
        console.log(response);
        return setResponse(response.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setOriginalText(e.target.value);
        }}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setFromLang(e.target.value);
        }}
      >
        {languages.map((lang) => {
          return <option value={lang.code}>{lang.name}</option>;
        })}
      </select>
      <select
        name=""
        id=""
        onChange={(e) => {
          setToLang(e.target.value);
        }}
      >
        {languages.map((lang) => {
          return <option value={lang.code}>{lang.name}</option>;
        })}
      </select>
      <button onClick={handleClick}>Translate</button>
      <div>{response}</div>
    </div>
  );
};

export default Translator;
