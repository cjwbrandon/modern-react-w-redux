import React, { useState, useEffect } from "react";
import GoogleAPI from "../api/GoogleAPI";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(translated);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 500);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    if (!debouncedText) return;

    (async () => {
      const { data } = await GoogleAPI.post(
        "/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    })();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
