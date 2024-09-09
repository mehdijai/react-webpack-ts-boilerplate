import { getPoetry, Poetry } from "./poetry";
import "./styles/main.scss";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [poetry, setPoetry] = useState<Poetry | undefined>();

  useEffect(() => {
    getPoetry().then((res) => {
      setPoetry(res);
    });
  }, []);

  const updatePoetry = useCallback(() => {
    getPoetry().then((res) => {
      setPoetry(res);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="title">{poetry?.title}</h1>
      <h2 className="author">{poetry?.author}</h2>
      <h3 className="lines">{poetry?.linecount} line</h3>
      <p className="content">
        {poetry?.lines?.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </p>
      <button onClick={updatePoetry} className="update-btn">
        Next poetry
      </button>
    </div>
  );
}

export default App;
