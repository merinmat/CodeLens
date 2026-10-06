import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [analysis, setAnalysis] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (evt) => {
    setCode(evt.target.value);
  };

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://codelens-si3y.onrender.com/api/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: code,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setAnalysis(data);
      setError("");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setAnalysis({});
    setError("");
  };

  return (
    <div className="app-container">
      <h1>CodeLens</h1>
      <textarea
        name="analysis"
        className="code-editor"
        value={code}
        onChange={handleCodeChange}
      ></textarea>

      <div className="button-group">
        {loading ? (
          <p className="loading-message">Analyzing...</p>
        ) : (
          <button className="analyze-button" onClick={handleAnalyze}>
            Analyze Code
          </button>
        )}

        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>

      {/* error */}
      {error && <p className="error-message">{error}</p>}

      <h2>Warnings</h2>
      <ul className="warnings-list">
        {analysis.warnings &&
          analysis.warnings.map((warn, index) => (
            <li className="warning-item" key={index}>
              {warn}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
