import React, { useState, useEffect } from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Wikipedia.get("", {
        params: { srsearch: debouncedTerm },
      });
      setResults(data.query.search);
    };

    if (!debouncedTerm) return;

    search();
  }, [debouncedTerm]);

  // useEffect({callbackFunction}, {[]})
  // Note: cannot use an async await for the callback function directly
  // useEffect(() => {
  //   // Way to use Async Await in useEffect() -> define an IIFE, inner function or use .then
  //   const search = async () => {
  //     const { data } = await Wikipedia.get("", {
  //       params: { srsearch: term },
  //     });
  //     setResults(data.query.search);
  //   };

  //   if (!term) return;
  //   if (term && !results.length) {
  //     search();
  //   }
  //   const timeoutId = setTimeout(async () => search(), 500);

  // // IIFE
  // (async () => {
  //   const { data } = await Wikipedia.get("", {
  //     params: { srsearch: term },
  //   });
  //   setResults(data.query.search);
  // })();

  // useEffect's Cleanup Function
  // We can only return a function -> to do clean up
  // This function will run when this function is called again
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [term]);

  const renderedResults = results.map((result) => {
    // XXS Attacks in React
    // We only use dangerouslySetInnerHTML when we fully trust the source
    // Opens up to attacks

    // Linking results
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
